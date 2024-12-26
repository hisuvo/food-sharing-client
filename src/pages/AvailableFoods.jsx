import React, { useEffect, useState } from "react";
import FoodCard from "../components/foodCard";
import { TfiReload } from "react-icons/tfi";
import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";

export default function AvailableFoods() {
  const [foods, setFoods] = useState([]);
  const [layout, setLayout] = useState(true);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const { count } = useLoaderData();
  const [itemPerPage, setItemPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(0);
  const numberOfPage = Math.ceil(count / itemPerPage);

  const pages = [...Array(numberOfPage).keys()];

  useEffect(() => {
    const fetchDate = async () => {
      const { data } = await axios.get(
        `https://food-sharing-server-gamma.vercel.app/foods?search=${search}&sort=${sort}&page=${currentPage}&size=${itemPerPage}`
      );
      setFoods(data);
    };
    fetchDate();
  }, [search, sort, currentPage, itemPerPage]);

  // handle reset
  const handleReset = () => {
    setSearch("");
    setSort("");
  };

  // handle layout
  const handleLaout = () => {
    setLayout((prevState) => !prevState);
  };

  // set iteam per page handler
  const handlePerPageItem = (item) => {
    setItemPerPage(item);
    setCurrentPage(0);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
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
      {/* Pagination */}
      <div className="flex justify-center items-center gap-4">
        <div className="text-center space-x-6 my-4 md:my-8">
          {/* previous btn */}
          <button
            onClick={handlePrevPage}
            className="px-8 py-3 font-semibold rounded dark:bg-gray-800 dark:text-gray-100 outline-black outline-offset-2 outline-double active:outline-double active:outline-offset-4"
          >
            Prev
          </button>
          {/* pages number */}
          {pages.map((page, index) => (
            <button
              onClick={() => setCurrentPage(page)}
              className={` ${
                currentPage === page
                  ? "dark:text-gray-800 bg-gray-100"
                  : " dark:bg-gray-800 dark:text-gray-100 "
              } px-8 py-3 font-semibold rounded outline-black outline-offset-2 outline-double active:outline-double active:outline-offset-4`}
              key={index}
            >
              {page}
            </button>
          ))}

          {/* Next btn */}
          <button
            onClick={handleNextPage}
            className="px-8 py-3 font-semibold rounded dark:bg-gray-800 dark:text-gray-100 outline-black outline-offset-2 outline-double active:outline-double active:outline-offset-4"
          >
            Next
          </button>
        </div>
        <div>
          <select
            onChange={(e) => handlePerPageItem(e.target.value)}
            className="px-8 py-3 font-semibold rounded dark:bg-gray-800 dark:text-gray-100 outline-black outline-offset-2 outline-double active:outline-double active:outline-offset-4"
          >
            <option value="6">6</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="35">35</option>
          </select>
        </div>
      </div>
    </div>
  );
}
