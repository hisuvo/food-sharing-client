import Carousel from "../components/Carousel";
import DonearMarque from "../components/DonearMarque";
import FeaturedFood from "../components/FeaturedFood";
import HelpContribute from "../components/HelpContribute";

export default function Home() {
  return (
    <div className="container mx-auto space-y-16">
      <Carousel />
      <FeaturedFood />
      <HelpContribute />
      <DonearMarque />
    </div>
  );
}
