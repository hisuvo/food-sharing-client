import axios from "axios";
import React, { useEffect, useState } from "react";

export default function DonorCards() {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    const fetchFeaturedFood = async () => {
      try {
        const { data } = await axios.get(`http://localhost:9500/feature-foods`);
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
    <div className="flex  justify-between items-center">
      {donors.map((donor) => (
        <div key={donor._id}>
          <div className="flex justify-center bg-gray-200 dark:bg-gray-800 items-center flex-col mx-4 p-4">
            <figure>
              <img
                className="w-20 h-20 rounded-full"
                src={donor?.donor?.img}
                alt=""
              />
            </figure>
          </div>
        </div>
      ))}
    </div>
  );
}
