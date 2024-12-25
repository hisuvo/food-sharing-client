import React, { useEffect, useState } from "react";
import FoodCard from "../components/foodCard";
import { TfiReload } from "react-icons/tfi";
import axios from "axios";

export default function AvailableFoods() {
  const [foods, setFoods] = useState([]);
  const [layout, setLayout] = useState(true);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    const fetchDate = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/foods?search=${search}&sort=${sort}`
      );
      setFoods(data);
    };
    fetchDate();
  }, [search, sort]);

  // handle reset
  const handleReset = () => {
    setSearch("");
    setSort("");
  };

  // handle layout
  const handleLaout = () => {
    setLayout((prevState) => !prevState);
  };

  return (
    <div className="container px-6 py-10 mx-auto min-h-[calc(100vh-306px)]">
      {/* search and sort */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 mb-4 md:mb-8 ">
        <button onClick={handleLaout} className="btn">
          Chanlge Layout
        </button>
        {/* Sort ascandimg and descending way */}
        <div>
          <select
            name="category"
            id="category"
            onChange={(e) => setSort(e.target.value)}
            value={sort}
            className="border p-4 rounded-md"
          >
            <option value="">Sort By Expire Date</option>
            <option value="dsc">Descending Order</option>
            <option value="asc">Ascending Order</option>
          </select>
        </div>
        {/* search */}
        <div className="flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
          <input
            className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
            type="text"
            name="search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            placeholder="Enter Food Name"
            aria-label="Enter Food Name"
          />

          <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
            Search
          </button>
        </div>

        {/* Reset */}
        <button onClick={handleReset} className="btn text-2xl font-extrabold">
          {" "}
          <TfiReload />{" "}
        </button>
      </div>
      {/* available food cards */}
      <div
        className={`grid grid-cols-1  ${
          layout ? "md:grid-cols-3" : "md:grid-cols-2"
        }  gap-4`}
      >
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
