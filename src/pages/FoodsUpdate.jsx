import axios from "axios";
import { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import toast from "react-hot-toast";

export default function FoodsUpdate() {
  const [startDate, setStartDate] = useState(new Date());
  const [food, setFood] = useState({});
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetchUpdateFood();
  }, [id]);

  // fetch food from server fon update
  const fetchUpdateFood = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/foods/${id}`
    );
    setFood(data);
    setStartDate(new Date(data.expireDate));
  };

  const { name, img, quantity, location, unit, expireDate, note, status } =
    food;

  //  Update handler
  const handleUpdateFood = (e) => {
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
      expireDate: date.toLocaleString(),
      note,
      donor: {
        name: user?.displayName,
        email: user?.email,
        img: user?.photoURL,
      },
      status: status,
    };

    // // Update Donte Food in server
    try {
      // make a put request
      axios.put(`${import.meta.env.VITE_API_URL}/update-foods/${id}`, foodData);
      //   form reset
      form.reset();
      toast.success("Food Update Successfully");
      navigate("/availableFood");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
    console.log(foodData);
  };

  return (
    <section className="p-6 dark:bg-gray-100  dark:text-gray-900">
      <div className="max-w-[43rem] flex flex-col mx-auto space-y-12">
        <div className="grid grid-cols-4 gap-10 p-6 rounded-md shadow-sm dark:bg-gray-50">
          <div className="col-span-full">
            <p className="font-medium text-2xl">Update Donate Foods</p>
          </div>
          <form
            onSubmit={handleUpdateFood}
            className="grid grid-cols-6 gap-4 col-span-full"
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
                defaultValue={name}
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
                defaultValue={img}
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
                  defaultValue={quantity}
                  placeholder="Food Quantaty here"
                  className="w-full p-4 border rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-gray-600 dark:border-gray-300"
                />
                {quantity && (
                  <select
                    defaultValue={unit}
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
                )}
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
                defaultValue={location}
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
                  dateFormat="Pp"
                  onChange={(data) => setStartDate(data)}
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
                defaultValue={note}
                placeholder=""
                className="w-full p-4 border rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-gray-600 dark:border-gray-300"
              />
            </div>
            <button className="px-8 py-3 col-span-full active:bg-gray-800/90 font-semibold rounded dark:bg-gray-800 dark:text-gray-100">
              Update Food
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
