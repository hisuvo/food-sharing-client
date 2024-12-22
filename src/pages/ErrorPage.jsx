import Lottie from "lottie-react";
import ErrorAnimation from "../assets/notfount.json";

export default function ErrorPage() {
  return (
    <div className="flex justify-center items-center min-h-screen mx-auto bg-purple-100">
      <Lottie className="max-w-[800px]" animationData={ErrorAnimation}></Lottie>
    </div>
  );
}
