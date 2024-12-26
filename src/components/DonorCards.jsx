import axios from "axios";
import React, { useEffect, useState } from "react";

export default function DonorCards() {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    const fetchFeaturedFood = async () => {
      try {
        const { data } = await axios.get(
          `https://food-sharing-server-gamma.vercel.app/feature-foods`
        );
        // Filter unique donors by email
        const uniqueDonors = Array.from(
          new Map(data.map((donor) => [donor?.donor?.email, donor])).values()
        );
        setDonors(uniqueDonors);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchFeaturedFood();
  }, []);

  console.log(donors);

  return (
    <div className="flex bg-white justify-between items-center gap-4 shadow-xl rounded-md">
      {donors.map((donor) => (
        <div key={donor._id}>
          <div className="flex justify-center items-center flex-col border p-4">
            <figure>
              <img
                className="w-20 h-20 rounded-full"
                src={donor?.donor?.img}
                alt=""
              />
            </figure>
            <h1 className="text-xl font-bold uppercase">
              {donor?.donor?.name}
            </h1>
            <h3>{donor?.donor?.email}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
