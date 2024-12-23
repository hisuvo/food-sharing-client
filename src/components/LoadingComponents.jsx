export default function LoadingComponents() {
  return (
    <div className="flex my-[149px] justify-center gap-4 items-center">
      <div className="w-8 h-8 md:w-16 md:h-16 border-4 md:border-8 border-dashed rounded-full animate-spin dark:border-teal-950"></div>
      <h2 className="text-xl md:text-4xl font-bold">Loading....</h2>
    </div>
  );
}
