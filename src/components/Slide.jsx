import { Link } from "react-router-dom";
import ButtonOne from "./Button/ButtonOne";

const Slide = ({ image, text }) => {
  return (
    <div
      className="w-full bg-center bg-cover h-[25rem] md:h-[32rem]"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "top",
      }}
    >
      <div className="flex items-center justify-center w-full h-full">
        <div className="flex flex-col items-center justify-center gap-6">
          <h1 className="text-2xl font-semibold text-gray-50 lg:text-4xl">
            {text}
          </h1>

          <Link to="/addFood" className="bg-gray-50 rounded-lg">
            <ButtonOne text={"Donate Food"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slide;
