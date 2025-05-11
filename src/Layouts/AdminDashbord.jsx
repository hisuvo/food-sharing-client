import React from "react";
import { useLoaderData } from "react-router-dom";

const AdminDashbord = () => {
  const { count } = useLoaderData();

  return (
    <div>
      <div className="card w-60 dark:bg-blue-950 card-sm shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Small Card</h2>
          <p>A card component has a figure</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashbord;
