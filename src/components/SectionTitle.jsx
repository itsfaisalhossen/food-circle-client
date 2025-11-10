const SectionTitle = ({ title1, title2 }) => {
  return (
    <div className="w-full md:w-[720px] mx-auto textblack text-center mb-14">
      <h3 className="sirin-stencil-regular text-3xl md:text-5xl font-extrabold">
        {title1}
      </h3>
      <p className="mt-4">{title2}</p>
    </div>
  );
};
export default SectionTitle;
