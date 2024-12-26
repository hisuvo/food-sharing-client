import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";

export default function FoodCard({ food }) {
  const [startDate, setStartDate] = useState(new Date(food.expireDate));
  const { _id, name, img, quantity, location, unit, expireDate, note, donor } =
    food;

  return (
    <>
      <div className="border p-4 flex flex-col transition-transform hover:scale-105">
        <figure>
          <img
            className="w-full max-h-48 object-cover rounded"
            src={img}
            alt={name}
          />
        </figure>
        <div className="flex-grow space-y-3 my-4">
          <h2 className="text-xl font-mono">{name}</h2>
          <p className="text-base font-light"> {location} </p>
          <div className="flex justify-between items-center">
            <h4 className="font-semibold">{quantity} kg</h4>
            {
              <DatePicker
                disabled
                className="text-end bg-transparent"
                selected={startDate}
                onChange={(expireDate) => setStartDate(expireDate)}
              />
            }
          </div>
        </div>
        <Link
          to={`/foodDetails/${_id}`}
          className="px-8 text-center py-3 font-semibold rounded dark:bg-gray-800 dark:text-gray-100 outline-black outline-offset-2 outline-double active:outline-double active:outline-offset-4"
        >
          <button>view Details</button>
        </Link>
      </div>
    </>
  );
}
