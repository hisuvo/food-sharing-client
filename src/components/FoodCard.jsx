import React from "react";
import { Link } from "react-router-dom";

export default function FoodCard({ food }) {
  const { _id, name, img, quantity, location, unit, expireDate, note, donor } =
    food;

  return (
    <>
      <div className="border p-4 flex flex-col">
        <figure>
          <img src={img} alt={name} />
        </figure>
        <div className="flex-grow space-y-3 my-4">
          <h2 className="text-xl uppercase ">{name}</h2>
          <p className="text-base font-light"> {location} </p>
          <div className="flex justify-between items-center">
            <h4 className="font-semibold">{quantity} kg</h4>
            <h4 className="font-semibold">{expireDate}</h4>
          </div>
        </div>
        <Link to={`/foodDetails/${_id}`} className="btn">
          view Details
        </Link>
      </div>
    </>
  );
}
