const SectionTitle = ({ title1, title2 }) => {
  return (
    <div className="w-full md:w-[570px] mx-auto">
      <h3 className="text-2xl md:text-4xl font-bold">{title1}</h3>
      <p className="mt-2">{title2}</p>
    </div>
  );
};
export default SectionTitle;
