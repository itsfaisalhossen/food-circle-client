import { Link } from "react-router";

const BtnPrimary = ({ text, link }) => {
  return (
    <Link
      className="px-4 md:px-8 py-2 md:py-2.5 text-center rounded-full bg-gray-800 text-white hover:bg-red-500 transition-all duration-300 text-[14px] md:text-[15px]"
      to={link}
    >
      {text}
    </Link>
  );
};
export default BtnPrimary;
