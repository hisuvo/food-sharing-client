import axios from "axios";
import { useEffect, useState } from "react";
import FoodCard from "./foodCard";
import { Link } from "react-router-dom";

export default function FeaturedFood() {
  const [featuredFood, setFeaturedFood] = useState([]);

  useEffect(() => {
    const fetchFeaturedFood = async () => {
      const { data } = await axios.get(
        `https://food-sharing-server-gamma.vercel.app/feature-foods`
      );
      //   here sort food featured data base on quantity
      const sortData = data.sort((a, b) => b.quantity - a.quantity);
      setFeaturedFood(sortData);
    };

    fetchFeaturedFood();
  }, []);

  return (
    <div className="my-16">
      <div className="max-w-[750px] mx-auto text-center p-4 md:p-8">
        <h2 className="text-2xl font-semibold">Featured Food Donations</h2>
        <p className="font-light">
          Explore the top food contributions from our generous donors. Every
          donation helps reduce food waste and provides meals to those in need.
          Together, we make a difference!
        </p>
      </div>
      {/* featured food cord */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {featuredFood.slice(0, 6).map((food) => (
          <FoodCard key={food._id} food={food} />
        ))}
      </div>
      {/* see all food btn */}
      <div className="text-center my-4 md:my-8">
        <Link to={"/availableFood"}>
          <button className="px-8 py-3 font-semibold rounded dark:bg-gray-800 dark:text-gray-100 outline-black outline-offset-2 outline-double active:outline-double active:outline-offset-4">
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
}
