import Marquee from "react-fast-marquee";
import DonorCards from "./DonorCards";

export default function DonearMarque() {
  return (
    <div className="bg-gray-50 px-2 py-4 md:py-8 lg:py-10 rounded-md my-4 md:my-10">
      <div className="mb-8">
        <h2 className="text-2xl uppercase text-center font-bold">
          Our Currents <span className="bg-black text-white p-2">Donetors</span>
        </h2>
      </div>
      <Marquee>
        <DonorCards />
      </Marquee>
    </div>
  );
}
