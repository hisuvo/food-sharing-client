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
            className="w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-green-500 rounded-md lg:w-auto hover:bg-green-400 focus:outline-none focus:bg-green-400"
          >
            Donate Food & Surplus Reduction
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slide;
