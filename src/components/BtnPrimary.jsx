import { Link } from "react-router";

const BtnPrimary = ({ text, link }) => {
  return (
    <Link
      className="px-4 md:px-8 py-2 md:py-2.5 rounded-full bg-red-500 text-white hover:text-black hover:bg-white transition-all duration-300 textxl"
      to={link}
    >
      {text}
    </Link>
  );
};
export default BtnPrimary;
