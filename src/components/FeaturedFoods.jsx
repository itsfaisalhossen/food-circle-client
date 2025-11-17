import { Link } from "react-router";
import Container from "./Container";
import FoodsCard from "./FoodsCard";
import SectionTitle from "./SectionTitle";

const FeaturedFoods = ({ foodItem }) => {
  return (
    <div>
      <Container>
        <SectionTitle
          title1={"Featured Foods"}
          title2={
            "Discover delicious, surplus meals shared by our community to reduce waste and spread kindness."
          }
        />
        <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {foodItem.map((food) => {
            return <FoodsCard key={food?._id} food={food} />;
          })}
        </div>
        <div className="md:mt-14 mt-8 flex items-center justify-center w-full">
          <Link to={"/available-foods"}>
            <button className="px-4 md:px-8 border-2 p-3 rounded-xl border-red-500 hover:bg-red-500 font-medium cursor-pointer hover:text-white text-black transition-all duration-300 textxl">
              Show All
            </button>
          </Link>
        </div>
      </Container>
    </div>
  );
};
export default FeaturedFoods;
