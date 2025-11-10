import { Link } from "react-router";

const BtnPrimary = ({ text, link }) => {
  return (
    <Link
      className="px-4 md:px-8 py-3 md:py-4 font-medium text-center rounded-xl bg-black  text-white hover:bg-red-500 transition-all duration-300 text-[14px] md:text-[15px]"
      to={link}
    >
      {text}
    </Link>
  );
};
export default BtnPrimary;
