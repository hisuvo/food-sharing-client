const SectionHeader = ({ title, description }) => {
  return (
    <div className="max-w-[750px] mx-auto space-y-4 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold uppercase">{title}</h2>
      <p className="text-base">{description}</p>
    </div>
  );
};

export default SectionHeader;
