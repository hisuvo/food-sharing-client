import { Link } from "react-router-dom";
import helpContrubuteImg from "../assets/add-food.jpg";
export default function HelpContribute() {
  return (
    <div className="grid grid-cols-12 px-2 py-4 gap-4 md:gap-12">
      <div className="col-span-full md:col-span-5 lg:col-span-6">
        <figure>
          <img
            className="w-full max-h-[300px] rounded-xl object-cover"
            src={helpContrubuteImg}
            alt=""
          />
        </figure>
      </div>

      <div className="col-span-full md:col-span-5 lg:col-span-6">
        <h4 className=" font-mono font-semibold">Help With Featured Cause</h4>
        <h2 className=" text-2xl md:text-4xl font-bold">
          Contribute for the differently abled
        </h2>
        <p>
          Our platform is dedicated to creating an inclusive community where
          everyone, including the differently abled, can participate in food
          sharing and waste reduction. By fostering accessibility and providing
          tailored support, we ensure that people with diverse abilities can
          contribute as donors, recipients, or volunteers. Together, we break
          barriers, reduce food waste....
        </p>
        <div className="mt-4 md:mt-8">
          <Link to={"/addFood"}>
            <button className="px-8 py-3 font-semibold rounded dark:bg-gray-800 dark:text-gray-100 outline-black outline-offset-2 outline-double active:outline-double active:outline-offset-4">
              Donate Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
