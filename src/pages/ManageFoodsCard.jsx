import React from "react";
import { Link } from "react-router-dom";

export default function ManageFoodsCard({ food, handleRenove }) {
  const { _id, name, img, location, expireDate, note } = food;
  const x = {
    _id: "676af077b6d783af8aeeadd0",
    name: "Fruites",
    img: "https://i.ibb.co.com/qjLwhhF/Project-Cover7.png",
    quantity: "25",
    location: "Dhaka, framget",
    unit: "kg",
    expireDate: "12/28/2024, 11:00:00 PM",
    note: "Eos ipsa dignissim",
    donor: {
      name: "Root",
      email: "root@gmail.com",
      img: "https://i.ibb.co.com/tb6MXQN/Joe-Root.jpg",
    },
    status: "Available",
  };

  return (
    <>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img src={img} alt={name} />
              </div>
            </div>
            <div className="hidden md:block">
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">{note.slice(0, 20)}..</div>
            </div>
          </div>
        </td>
        <td>
          <span>{location}</span>
        </td>
        <td>{expireDate}</td>
        <th>
          <Link
            to={`/foodUpdate/${_id}`}
            className="btn btn-xs text-white bg-green-500 hover:bg-green-600"
          >
            Upload
          </Link>{" "}
          <button
            onClick={() => handleRenove(_id)}
            className="btn btn-xs text-white bg-red-500 hover:bg-red-600"
          >
            Delete
          </button>
        </th>
      </tr>
    </>
  );
}
