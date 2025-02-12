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
        <div className="flex flex-col items-center justify-center gap-6">
          <h1 className="text-2xl font-semibold text-white lg:text-4xl">
            {text}
          </h1>

          <Link
            to="/addFood"
            className="px-8 py-3 font-semibold rounded bg-gray-100 dark:bg-gray-800 dark:text-gray-100 outline-double active:outline-double active:outline-offset-4 "
          >
            Donate Food
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slide;
