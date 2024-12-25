import Carousel from "../components/Carousel";
import FeaturedFood from "../components/FeaturedFood";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Carousel />
      <FeaturedFood />
    </div>
  );
}
