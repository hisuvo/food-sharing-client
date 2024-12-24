import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import axios from "axios";
import Swal from "sweetalert2";

export default function FoodDetails() {
  const [food, setFood] = useState({});
  const [showModal, setShowModal] = useState(true);
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthContext);
  const { id } = useParams();

  //  Fetch specifice food by usein id
  useEffect(() => {
    const fetchFood = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/foods/${id}`
        );
        setFood(data);
        setStartDate(data.date);
      } catch (error) {
        Swal.fire({
          title: `${error?.message}`,
          icon: "error",
        });
      }
    };
    fetchFood();
  }, [id]);

  const {
    _id,
    name,
    img,
    quantity,
    location,
    expireDate,
    note,
    status,
    donor,
  } = food;

  return (
    <div className="container mx-auto grid md:grid-cols-12">
      {/* <div className="md:col-span-5">
        <figure>
          <img className="max-w-[50%] max-h-[400px]" src={img} alt="" />
        </figure>
      </div> */}
      <div className="md:col-span-7 p-6 lg:p-10">
        <div className="flex justify-start">
          <span className="px-2 py-1 text-xs rounded-full dark:bg-yellow-600 dark:text-gray-50">
            {status}
          </span>
        </div>
        <h1 className="text-3xl font-semibold">{name}</h1>
        <p className="flex-1 pt-2">{note}</p>
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
        <button className="btn">Request</button>
      </div>
    </div>
  );
}
