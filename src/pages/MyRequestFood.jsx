import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";
import axios from "axios";
import toast from "react-hot-toast";
import RequestFoodscard from "../components/RequestFoodscard";
import LoadingComponents from "../components/LoadingComponents";
import SectionHeader from "../Shared/SectionHeader";

export default function MyRequestFood() {
  const [requestedFoods, setRequestedFoods] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchRequestedFood = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:9500/request-foods/${user?.email}`
        );
        setRequestedFoods(data);
      } catch (error) {
        toast.error(`${error?.message}`);
      }
    };
    fetchRequestedFood();
  }, []);

  return (
    <div className="container mx-auto md:px-2">
      <div className="my-2 md:my-6">
        <SectionHeader title={"My Requested Foods"} />
        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 dark:bg-gray-900 rounded-full ">
          {requestedFoods.length} food requested
        </span>
      </div>
      <div className="overflow-x-auto border dark:bg-gray-900 p-2 md:p-4 shadow-sm">
        <table className="table table-xs">
          <thead>
            <tr className="dark:text-gray-50">
              <th className="text-base ">Foods</th>
              <th className="text-base ">Donator</th>
              <th className="text-base ">Additional Notes</th>
              <th className="text-base ">Location</th>
              <th className="text-base ">Expire Date</th>
              <th className="text-base ">Request Date</th>
            </tr>
          </thead>
          {requestedFoods.length > 0 ? (
            <tbody>
              {requestedFoods.map((requestFood) => (
                <RequestFoodscard
                  key={requestFood._id}
                  requestFood={requestFood}
                />
              ))}
            </tbody>
          ) : (
            <tbody>
              <LoadingComponents />
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}
