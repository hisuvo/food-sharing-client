import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import axios from "axios";
import Swal from "sweetalert2";
import { FaRegWindowClose } from "react-icons/fa";
import moment from "moment";
import toast from "react-hot-toast";

export default function FoodDetails() {
  const [food, setFood] = useState({});
  const [additionalNote, setAdditionalNote] = useState("");
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();

  //  Fetch food form server by useing id
  useEffect(() => {
    const fetchFood = async () => {
      try {
        const { data } = await axios.get(
          `https://food-sharing-server-gamma.vercel.app/foods/${id}`
        );
        setFood(data);
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
      await axios.post(
        `https://food-sharing-server-gamma.vercel.app/request-foods`,
        requestData
      );
      toast.success("Your request done");
      navigate("/myRequestFood");
    } catch (error) {
      toast.error(`${error?.code}`);
    }
  };

  return (
    <div className="container mx-auto relative ">
      <div className=" max-w-[750px] mx-auto border p-4">
        {/* Food Image */}
        <div>
          <label className="block font-medium">Food Image</label>
          <img
            src={food.img}
            alt={food.name}
            className="w-full h-36 object-cover rounded"
          />
        </div>
        <div className="flex justify-between items-center">
          <div>
            <div className="flex justify-start">
              <span className="px-2 py-1 text-xs rounded-full dark:bg-yellow-600 dark:text-gray-50">
                {status}
              </span>
            </div>
            <div>
              <h1 className="text-3xl font-semibold">{name}</h1>
              <p className="flex-1 pt-2">{note}</p>
            </div>
            {/* The button to open modal */}
            <label
              htmlFor="my_modal_6"
              className="btn right-0 px-8 py-3 active:bg-gray-800/90 font-semibold rounded dark:bg-gray-800 dark:text-gray-100"
            >
              Request
            </label>
          </div>

          <div className=" space-y-4">
            <div className="flex space-x-2">
              <div>
                <h4 className="self-center text-sm">Neme: {donor?.name}</h4>
                <h4 className="self-center text-sm">Email: {donor?.email}</h4>
              </div>
              <figure>
                <img
                  className="w-14 h-14 rounded-full dark:text-gray-600"
                  src={donor?.img}
                  alt=""
                />
              </figure>
            </div>
            <span className=" text-xs">{expireDate}</span>
          </div>
        </div>
      </div>

      {/* ------------------- */}

      {/* modal of food details */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box rounded-none max-w-[64rem]">
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
                className="w-full p-4 border rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-gray-600 dark:border-gray-300"
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
                className="w-full p-4 border rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-gray-600 dark:border-gray-300"
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
                className="w-full p-4 border rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-gray-600 dark:border-gray-300"
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
                className="w-full p-4 border rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-gray-600 dark:border-gray-300"
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
                  className="w-full p-4 border rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-gray-600 dark:border-gray-300"
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
                className="w-full p-4 border rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-gray-600 dark:border-gray-300"
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
                className="w-full p-4 border rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-gray-600 dark:border-gray-300"
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
                  className="w-full p-4 border rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-gray-600 dark:border-gray-300"
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
                className="textarea textarea-bordered w-full p-4 border rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-gray-600 dark:border-gray-300"
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
