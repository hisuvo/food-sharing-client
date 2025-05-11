import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import axios from "axios";
import Swal from "sweetalert2";
import { FaRegWindowClose } from "react-icons/fa";
import moment from "moment";
import toast from "react-hot-toast";
import DatePicker from "react-datepicker";

export default function FoodDetails() {
  const [food, setFood] = useState({});
  const [startDate, setStartDate] = useState(new Date());
  const [additionalNote, setAdditionalNote] = useState("");
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();

  //  Fetch food form server by useing id
  useEffect(() => {
    const fetchFood = async () => {
      try {
        const { data } = await axios.get(`http://localhost:9500/foods/${id}`);
        setFood(data);
        setStartDate(data.expireDate);
      } catch (error) {
        Swal.fire({
          title: `${error?.message}`,
          icon: "error",
        });
      }
    };
    fetchFood();
  }, [id]);

  const { _id, name, img, location, expireDate, note, status, donor } = food;

  const handleRequest = async () => {
    const requestData = {
      foodId: _id,
      name,
      img,
      location,
      expireDate,
      note: additionalNote,
      status: "requested",
      donor,
      requestDate: `${moment().format("L, LT")}`,
      requestEmail: user?.email,
    };

    // post request date in server
    try {
      await axios.post(`http://localhost:9500/request-foods`, requestData);
      toast.success("Your request done");
      navigate("/myRequestFood");
    } catch (error) {
      toast.error(`${error?.code}`);
    }
  };

  return (
    <div className="container mx-auto relative">
      {/*----------------- */}
      <div className="max-w-[950px] mx-auto grid grid-cols-12 md:gap-8 p-6 border my-8 bg-gray-50 dark:bg-gray-900">
        {/* donor information */}
        <div className="col-span-full md:flex flex-col justify-center md:gap-4 md:border items-center md:col-span-4">
          <figure>
            <img
              className="w-full h-[10rem] object-cover dark:text-gray-600"
              src={donor?.img}
              alt={donor?.name}
            />
          </figure>
          <div>
            <h4 className="self-center text-lg font-mono">
              {" "}
              <span className="font-semibold">Neme:</span> {donor?.name}
            </h4>
            <h4 className="self-center text-sm">
              {" "}
              <span className="font-semibold">Email:</span> {donor?.email}
            </h4>
          </div>
        </div>

        {/* Food Details section */}

        <div className="col-span-full md:col-span-8">
          <figure>
            <img
              src={food.img}
              alt={food.name}
              className="w-full h-[14rem] object-cover rounded"
            />
          </figure>
          <div className="flex flex-col md:flex-row justify-between items-center ">
            <p className="self-center text-sm">
              <span className="font-semibold">Id</span>: {_id}
            </p>
            <span className="px-2 py-1 badge bg-gray-900 text-gray-50">
              {status}
            </span>
          </div>
          <div className="">
            <h1 className="text-2xl font-semibold font-mono">{name}</h1>
            <p className="text-xs">{note}</p>
          </div>
          <div className=" flex flex-col md:flex-row justify-between items-center mt-4">
            <label
              htmlFor="my_modal_6"
              className="btn right-0 px-8 py-3  active:bg-gray-800/90 font-semibold rounded bg-gray-800 text-gray-100"
            >
              Request
            </label>
            <h4 className="text-xl font-semibold">
              {
                <DatePicker
                  disabled
                  className="text-center md:text-end bg-transparent"
                  selected={startDate}
                  onChange={(expireDate) => setStartDate(expireDate)}
                />
              }
            </h4>
          </div>
        </div>
      </div>

      {/* ------------------- */}

      {/* modal of food details */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box dark:bg-gray-800 rounded-none max-w-[64rem]">
          {/* modal close btn */}
          <div className="modal-action m-0">
            <label
              htmlFor="my_modal_6"
              className="text-2xl hover:text-red-500 active:text-red-700"
            >
              <FaRegWindowClose />
            </label>
          </div>

          {/* Food Image */}
          <div>
            <label className="block font-medium">Food Image</label>
            <img
              src={img}
              alt={name}
              className="w-full h-36 object-cover rounded"
            />
          </div>

          {/* modal input feild */}
          <form className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            {/* Food name */}
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="name" className="text-base font-medium block">
                Name
              </label>
              <input
                readOnly
                defaultValue={name}
                className="w-full dark:bg-gray-500 p-4 border rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-gray-600 dark:border-gray-300"
              />
            </div>

            {/* Food ID */}
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="lastname" className="text-base font-medium block">
                Food Id
              </label>
              <input
                readOnly
                type="text"
                defaultValue={_id}
                className="w-full dark:bg-gray-500  p-4 border rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-gray-600 dark:border-gray-300"
              />
            </div>

            {/* Food Donaor email*/}
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="lastname" className="text-base font-medium block">
                Food Donator Email
              </label>
              <input
                readOnly
                type="email"
                defaultValue={donor?.email}
                className="w-full dark:bg-gray-500  p-4 border rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-gray-600 dark:border-gray-300"
              />
            </div>

            {/* Food Donaor name*/}
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="lastname" className="text-base font-medium block">
                Food Donator Name
              </label>
              <input
                readOnly
                type="text"
                defaultValue={donor?.name}
                className="w-full dark:bg-gray-500 p-4 border rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-gray-600 dark:border-gray-300"
              />
            </div>

            {/* User Email */}
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="quntay" className="text-base font-medium block">
                User Email
              </label>
              <div className="relative">
                <input
                  readOnly
                  type="email"
                  defaultValue={user?.email}
                  placeholder="Food Quantaty here"
                  className="w-full dark:bg-gray-500  p-4 border rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-gray-600 dark:border-gray-300"
                />
              </div>
            </div>

            {/* Pickup Location */}
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="text" className="text-base font-medium block">
                Pickup Location
              </label>
              <input
                readOnly
                type="text"
                defaultValue={location}
                className="w-full dark:bg-gray-500  p-4 border rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-gray-600 dark:border-gray-300"
              />
            </div>

            {/* Current Date */}
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="date/time"
                className="text-base font-medium block"
              >
                Current Date/Time
              </label>
              <input
                readOnly
                defaultValue={moment().format("L, h:mm:ss a")}
                className="w-full dark:bg-gray-500  p-4 border rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-gray-600 dark:border-gray-300"
              />
            </div>

            {/* Expired Date */}
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="date/time"
                className="text-base font-medium block"
              >
                Expired Date/Time
              </label>
              <div>
                <input
                  readOnly
                  defaultValue={expireDate}
                  className="w-full dark:bg-gray-500  p-4 border rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-gray-600 dark:border-gray-300"
                />
              </div>
            </div>

            {/* Additional notes */}
            <div className="col-span-full">
              <label
                htmlFor="additionalnote"
                className="text-base font-medium block"
              >
                Additional Notes
              </label>
              <textarea
                type="text"
                name="note"
                onChange={(e) => setAdditionalNote(e.target.value)}
                className="textarea textarea-bordered w-full dark:bg-gray-500  p-4 border rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-gray-600 dark:border-gray-300"
                placeholder="Additional Notes Here"
              ></textarea>
            </div>

            <div className="col-span-full text-end">
              {donor?.email === user?.email ? (
                <h4 className="text-xl uppercase font-semibold text-center">
                  This food you donate
                </h4>
              ) : (
                <button
                  onClick={handleRequest}
                  className={` btn right-0 px-8 py-3 active:bg-gray-800/90 font-semibold rounded dark:bg-gray-800 dark:text-gray-100`}
                >
                  <Link to={"/"}>Request</Link>
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
