import { Link } from "react-router-dom";

const Slide = ({ image, text }) => {
  return (
    <div
      className="w-full bg-center bg-cover h-[25rem] md:h-[30rem]"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "top",
      }}
    >
      <div className="flex items-center justify-center w-full h-full bg-green-900/30">
        <div className="text-center ">
          <h1 className="text-2xl font-semibold text-white lg:text-4xl">
            {text}
          </h1>
          <br />
          <Link
            to="/addFood"
            className="px-8 py-3 font-semibold rounded dark:bg-gray-800 dark:text-gray-100 outline-double active:outline-double active:outline-offset-4 "
          >
            Donate Food & Surplus Reduction
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slide;
