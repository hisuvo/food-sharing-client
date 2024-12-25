import React from "react";

export default function RequestFoodscard({ requestFood }) {
  const {
    name,
    img,
    location,
    expireDate,
    note,
    status,
    donor,
    requestDate,
    requestEmail,
  } = requestFood;

  return (
    <>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        {/* img and food name */}
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img src={img} alt={name} />
              </div>
            </div>
            <div>
              <div className="font-bold text-[0.8rem]">{name}</div>
            </div>
          </div>
        </td>
        {/* donator name & email */}
        <td>
          <span className="uppercase text-[0.8rem]">{donor?.name}</span>
          <br />
          <span className="badge badge-ghost badge-sm text-[0.8rem]">
            {donor?.email}
          </span>
        </td>
        <td className="text-[0.8rem]">{note.slice(0, 45)}.....</td>
        <td className="text-[0.8rem]">{location}</td>
        <td className="text-[0.8rem]">{expireDate}</td>
        <td className="text-[0.8rem]">{requestDate}</td>
      </tr>
    </>
  );
}
