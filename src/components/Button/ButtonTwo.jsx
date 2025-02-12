import React from "react";

const ButtonTwo = ({ text }) => {
  return (
    <>
      <button className="px-8 w-full text-center py-3 font-semibold rounded dark:bg-gray-800 dark:text-gray-100 outline-black outline-offset-2 outline-double active:outline-double active:outline-offset-4">
        {text}
      </button>
    </>
  );
};

export default ButtonTwo;
