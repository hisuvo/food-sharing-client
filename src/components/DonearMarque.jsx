import Marquee from "react-fast-marquee";
import DonorCards from "./DonorCards";
import SectionHeader from "../Shared/SectionHeader";

export default function DonearMarque() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 px-2 py-4 md:py-8 space-y-4 rounded-md">
      <SectionHeader title={"Our current Donetors"} />
      <Marquee>
        <DonorCards />
      </Marquee>
    </div>
  );
}
