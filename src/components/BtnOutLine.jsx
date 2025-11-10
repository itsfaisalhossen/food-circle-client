import { Link } from "react-router";

const BtnOutLine = ({ link, text }) => {
  return (
    <Link
      className="px-4 md:px-8 p-2.5 rounded-full border-2 border-white hover:border-red-500 hover:bg-red-500 text-white transition-all duration-300 textxl"
      to={link}
    >
      {text}
    </Link>
  );
};
export default BtnOutLine;
