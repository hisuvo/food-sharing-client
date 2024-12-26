import { useContext, useState } from "react";
import donateFoodImg from "../assets/add-food.jpeg";
import DatePicker from "react-datepicker";
import { AuthContext } from "../providers/AuthProviders";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function AddFoods() {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleFoodDonate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const img = form.photo.value;
    const quantity = form.quntaty.value;
    const location = form.location.value;
    const unit = form.unit.value;
    const date = startDate;
    const note = form.note.value;

    const foodData = {
      name,
      img,
      quantity,
      location,
      unit,
      expireDate: startDate,
      note,
      donor: {
        name: user?.displayName,
        email: user?.email,
        img: user?.photoURL,
      },
      status: "Available",
    };

    // Add Donte Food in server
    try {
      axios.post(
        `https://food-sharing-server-gamma.vercel.app/add-foods`,
        foodData
      );
      toast.success("Food Donate Success");
      navigate("/availableFood");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
      <div className="container flex flex-col mx-auto space-y-12">
        <div className="grid grid-cols-4 gap-10 p-6 rounded-md shadow-sm dark:bg-gray-50">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-medium text-2xl">Add Donate Foods</p>
            <p className="text-xs">
              Share surplus food to help those in need. Fill out the form to
              donate.
            </p>
            <div className="hidden lg:block">
              <img className="rounded-md" src={donateFoodImg} alt="" />
            </div>
          </div>
          <form
            onSubmit={handleFoodDonate}
            className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3"
          >
            {/* Food name */}
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="name" className="text-sm">
                Name
              </label>
              <input
                id="firstname"
                type="text"
                name="name"
                placeholder="Food name here"
                className="w-full p-4 border rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-gray-600 dark:border-gray-300"
              />
            </div>
            {/* Food Photo */}
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="lastname" className="text-sm">
                Photo
              </label>
              <input
                id="photo"
                type="url"
                name="photo"
                placeholder="Image url here"
                className="w-full p-4 border rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-gray-600 dark:border-gray-300"
              />
            </div>
            {/* Food Quntaty */}
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="quntay" className="text-sm">
                Quntaty
              </label>
              <div className="relative">
                <input
                  id="quntaty"
                  type="number"
                  name="quntaty"
                  placeholder="Food Quantaty here"
                  className="w-full p-4 border rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-gray-600 dark:border-gray-300"
                />
                <select
                  defaultValue={"Unit"}
                  name="unit"
                  className="absolute bottom-0 right-0 border-none p-4 bg-transparent"
                >
                  <option disabled value="">
                    Unit
                  </option>
                  <option value="kg">kg</option>
                  <option value="g">gram</option>
                  <option value="ltr">ltr</option>
                  <option value="pac">pac</option>
                  <option value="pic">Pic</option>
                </select>
              </div>
            </div>
            {/* Pickup Location */}
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="text" className="text-sm">
                Pickup Location
              </label>
              <input
                type="text"
                name="location"
                placeholder="Location"
                className="w-full p-4 border rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-gray-600 dark:border-gray-300"
              />
            </div>
            {/* Expired Date */}
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="date/time" className="text-sm">
                Expired Date/Time
              </label>
              <div className="grid col-span-12">
                <DatePicker
                  selected={startDate}
                  showTimeSelect
                  dateFormat="P"
                  onChange={(date) => setStartDate(date)}
                  className="w-full p-4 border rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-gray-600 dark:border-gray-300"
                />
              </div>
            </div>
            {/* Additional notes */}
            <div className="col-span-full">
              <label htmlFor="additionalnote" className="text-sm">
                Additional Notes
              </label>
              <input
                id="note"
                type="text"
                name="note"
                placeholder=""
                className="w-full p-4 border rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-gray-600 dark:border-gray-300"
              />
            </div>
            <button className="px-8 py-3 col-span-full active:bg-gray-800/90 font-semibold rounded dark:bg-gray-800 dark:text-gray-100">
              Add Donate Food
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
