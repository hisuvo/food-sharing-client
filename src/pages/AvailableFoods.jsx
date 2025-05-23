import React, { useEffect, useState } from "react";
import FoodCard from "../components/foodCard";
import { TfiReload } from "react-icons/tfi";
import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";
import LoadingComponents from "../components/LoadingComponents";

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
        `http://localhost:9500/foods?search=${search}&sort=${sort}&page=${currentPage}&size=${itemPerPage}`
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
      <div className="flex flex-col lg:flex-row justify-center items-center gap-2 md:gap-4 mb-4 md:mb-8 ">
        <button
          onClick={handleLaout}
          className="btn bg-white dark:bg-gray-800 dark:text-gray-50"
        >
          Chanlge Layout
        </button>
        {/* Sort ascandimg and descending way */}
        <div className="">
          <select
            name="category"
            id="category"
            onChange={(e) => setSort(e.target.value)}
            value={sort}
            className="border dark:bg-gray-800 dark:text-gray-50 p-4 rounded-md"
          >
            <option value="">Sort By Expire Date</option>
            <option value="dsc">Descending Order</option>
            <option value="asc">Ascending Order</option>
          </select>
        </div>
        {/* search */}
        <div className="flex overflow-hidden border rounded-lgfocus-within:border-blue-400 focus-within:ring-blue-300">
          <input
            className="p-4 rounded-lg dark:bg-gray-800 dark:text-gray-50"
            type="text"
            name="search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            placeholder="Search Food By Name"
            aria-label="Enter Food Name"
          />
        </div>

        {/* Reset */}
        <button
          onClick={handleReset}
          className="btn text-2xl bg-white dark:bg-gray-800 dark:text-gray-50 font-extrabold"
        >
          {" "}
          <TfiReload />{" "}
        </button>
      </div>

      {/* available food cards */}
      {foods.length > 0 ? (
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
      ) : (
        <div className="min-h-screen">
          <LoadingComponents />
        </div>
      )}
      {/* <div
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
      </div> */}

      {/* Pagination */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <div className="text-center flex gap-4 my-4 md:my-8">
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
              } hidden md:block px-8 py-3 font-semibold rounded outline-black outline-offset-2 outline-double active:outline-double active:outline-offset-4`}
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
