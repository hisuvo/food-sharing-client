import React from "react";
import { Link } from "react-router-dom";

export default function FoodCard({ food }) {
  const { _id, name, img, quantity, location, unit, expireDate, note, donor } =
    food;
  console.log(food);

  return (
    <>
      {/* {availability && ( */}
      <div className="border p-4 flex flex-col">
        <figure>
          <img src="https://i.ibb.co.com/F5cxRBz/Project-Cover5.png" alt="" />
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
      {/* )} */}
    </>
  );
}

const x = {
  _id: "67699ee415403f5fe061defb",
  name: "Fresh Apples",
  image: "https://example.com/images/apples.jpg",
  quantity: 10,
  pickupLocation: "123 Main Street, Cityville",
  expiredDateTime: "2024-12-30T18:00:00Z",
  additionalNotes: "Freshly picked, organic apples.",
  status: "Available",
};
