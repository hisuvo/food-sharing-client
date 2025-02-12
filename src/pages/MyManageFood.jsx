import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";
import toast from "react-hot-toast";
import ManageFoodsCard from "./ManageFoodsCard";
import Swal from "sweetalert2";
import LoadingComponents from "../components/LoadingComponents";
import SectionHeader from "../Shared/SectionHeader";

export default function MyManageFood() {
  const [manageFoods, setManageFoods] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetchManageFoods();
  }, []);

  // user email specific manage foods fetch from db
  const fetchManageFoods = async () => {
    try {
      const { data } = await axios.get(
        `https://food-sharing-server-gamma.vercel.app/manage-foods/${user?.email}`
      );
      setManageFoods(data);
      console.log(data);
    } catch (error) {
      toast.error(`${error.code}`);
    }
  };

  // Delete functionlity
  const handleRenove = async (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios.delete(
            `https://food-sharing-server-gamma.vercel.app/food/${id}`
          );
          Swal.fire({
            title: "Deleted!",
            text: "Your food has been deleted.",
            icon: "success",
          });

          fetchManageFoods();
        }
      });
    } catch (error) {
      Swal.fire({
        title: `${error.code}`,
        icon: "error",
      });
    }
  };

  return (
    <div className="container mx-auto md:px-2">
      <div className="my-2 md:my-6">
        {/* <h4 className="text-base font-bold ">My Requested Foods</h4> */}
        <SectionHeader title={"My Manage Foods"} />
        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 dark:bg-gray-900 rounded-full ">
          {manageFoods.length} food managed
        </span>
      </div>
      <div className="overflow-x-auto border dark:bg-gray-900 rounded-md md:p-2 shadow-sm">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="dark:text-gray-50">
              <th className="md:text-base">Food</th>
              <th className="md:text-base">Location</th>
              <th className="md:text-base">Expire Date</th>
              <th className="md:text-base">Edit</th>
            </tr>
          </thead>
          {manageFoods.length > 0 ? (
            <tbody>
              {/* manage foods card */}
              {manageFoods.map((food) => (
                <ManageFoodsCard
                  key={food._id}
                  food={food}
                  handleRenove={handleRenove}
                />
              ))}
            </tbody>
          ) : (
            <tbody>
              <LoadingComponents />
            </tbody>
          )}

          {/* foot */}
        </table>
      </div>
    </div>
  );
}
