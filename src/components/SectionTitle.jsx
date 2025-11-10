const SectionTitle = ({ title1, title2 }) => {
  return (
    <div className="w-full md:w-[570px] mx-auto text-center">
      <h3 className="sirin-stencil-regular text-3xl md:text-5xl font-extrabold">
        {title1}
      </h3>
      <p className="mt-4">{title2}</p>
    </div>
  );
};
export default SectionTitle;
