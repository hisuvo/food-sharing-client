import React from "react";

export default function RequestFoodscard({ requestFood }) {
  console.log(requestFood);
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

  const x = {
    _id: "676b1dac3223d80e2c37742f",
    foodId: "676af669b6d783af8aeeadd1",
    name: "Kiara",
    img: "https://i.ibb.co.com/0njsp1c/Project-Cover.png",
    location: "Quae nihil rerum exp",
    expireDate: "12/24/2024, 11:00:00 PM",
    note: "Dramatically facilitate ubiquitous e-services rather than frictionless niches. Synergistically customize vertical infrastructures through multifunctional experiences. Quickly disseminate.",
    status: "requested",
    donor: {
      name: "SUVO DATTA",
      email: "suvodatta72@gmail.com",
      img: "https://lh3.googleusercontent.com/a/ACg8ocJeFf16RfSbhWE0tYmf0MEmvEowUBzq8wKOAR7VYbXNgGb1TxQ=s96-c",
    },
    requestDate: "12/25/2024, 2:46 AM",
    requestEmail: "root@gmail.com",
  };
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
