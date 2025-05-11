import React from "react";

const AdminInfoCard = ({ title, text }) => {
  return (
    <div>
      <div className="card dark:bg-gray-900 border-2 dark:border-gray-100 card-sm shadow-sm">
        <div className="card-body text-center">
          <p className="text-xl md:text-2xl">{text}</p>
          <h2 className="card-title justify-center text-2xl md:text-3xl">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AdminInfoCard;
