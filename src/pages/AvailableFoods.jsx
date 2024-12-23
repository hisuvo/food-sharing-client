import React, { useEffect, useState } from "react";
import FoodCard from "../components/foodCard";
import { TfiReload } from "react-icons/tfi";

export default function AvailableFoods() {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    const fetchDate = async () => {
      await fetch(`${import.meta.env.VITE_API_URL}/foods`)
        .then((res) => res.json())
        .then((data) => {
          setFoods(data);
        });
    };
    fetchDate();
  }, []);

  console.log(foods);

  return (
    <div className="container px-6 py-10 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between">
      {/* search and sort */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 ">
        {/* Sort ascandimg and descending way */}
        <div>
          <select
            name="category"
            id="category"
            className="border p-4 rounded-md"
          >
            <option value="">Sort By Deadline</option>
            <option value="dsc">Descending Order</option>
            <option value="asc">Ascending Order</option>
          </select>
        </div>
        {/* search */}
        <form>
          <div className="flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
            <input
              className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
              type="text"
              name="search"
              placeholder="Enter Food Name"
              aria-label="Enter Food Name"
            />

            <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
              Search
            </button>
          </div>
        </form>
        {/* Reset */}
        <button className="btn text-2xl font-extrabold">
          {" "}
          <TfiReload />{" "}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {foods.map(
          (food) =>
            food.status === "Available" && (
              <FoodCard key={food._id} food={food} />
            )
        )}
      </div>
    </div>
  );
}
