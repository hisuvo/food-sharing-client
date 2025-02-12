import axios from "axios";
import { useEffect, useState } from "react";
import FoodCard from "./foodCard";
import { Link } from "react-router-dom";
import SectionHeader from "../Shared/SectionHeader";
import ButtonOne from "./Button/ButtonOne";

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
    <div className="">
      <SectionHeader
        title={"Featured Food Donations"}
        description={`Explore the top food contributions from our generous donors. Every
        donation helps reduce food waste and provides meals to those in need.
        Together, we make a difference!`}
      />

      {/* featured food cord */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {featuredFood.slice(0, 6).map((food) => (
          <FoodCard key={food._id} food={food} />
        ))}
      </div>
      {/* see all food btn */}
      <div className="text-center my-4 md:my-8">
        <Link to={"/availableFood"}>
          <ButtonOne text={"Show All"} />
        </Link>
      </div>
    </div>
  );
}
