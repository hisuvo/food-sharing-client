import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AdminInfoCard from "../Shared/AdminInfoCard";
import { AuthContext } from "../providers/AuthProviders";
import axios from "axios";

const AdminDashbord = ({ title, text }) => {
  const [allRequestFood, setAllRequestFood] = useState([]);
  const { count } = useLoaderData();
  const { user } = useContext(AuthContext);

  // all request get from server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9500/all-request-foods"
        );
        setAllRequestFood(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  });

  return (
    <div className=" my-8 flex flex-col gap-4 justify-center items-center">
      <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-800 dark:text-gray-500">
        <img
          src={user?.photoURL}
          alt=""
          className="w-32 h-32 mx-auto rounded-full dark:bg-gray-800 aspect-square"
        />
        <div className="space-y-4 text-center divide-y dark:divide-gray-300">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">Suvo Datta</h2>
            <p className="px-5 text-xs sm:text-base dark:text-gray-600">
              {user?.email}
            </p>
          </div>
        </div>
      </div>
      <div className=" p-4 md:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AdminInfoCard text={count} title={"Food Donner"}></AdminInfoCard>

        <AdminInfoCard
          text={allRequestFood.length}
          title={"Food Request"}
        ></AdminInfoCard>

        <AdminInfoCard text={"100"} title={"Total user"}></AdminInfoCard>
      </div>
    </div>
  );
};

export default AdminDashbord;
