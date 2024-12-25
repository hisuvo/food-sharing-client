import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";
import toast from "react-hot-toast";
import ManageFoodsCard from "./ManageFoodsCard";

export default function MyManageFood() {
  const [manageFoods, setManageFoods] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const fetchManageFoods = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/manage-foods/${user?.email}`
        );
        setManageFoods(data);
      } catch (error) {
        toast.error(`${error.code}`);
      }
    };
    fetchManageFoods();
  }, [user]);

  return (
    <div className="container mx-auto md:px-2">
      <div className="my-2 md:my-6 flex items-center gap-1">
        <h4 className="text-base font-bold ">My Requested Foods</h4>
        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
          {manageFoods.length} request
        </span>
      </div>
      <div className="overflow-x-auto border rounded-md md:p-2 shadow-sm">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th className="md:text-base">Food</th>
              <th className="md:text-base">Location</th>
              <th className="md:text-base">Expire Date</th>
              <th className="md:text-base">Edit</th>
            </tr>
          </thead>
          <tbody>
            {/* manage foods card */}
            {manageFoods.map((food) => (
              <ManageFoodsCard key={food._id} food={food} />
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
}
