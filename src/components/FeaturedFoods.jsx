import { Link } from "react-router";
import BtnPrimary from "./BtnPrimary";
import Container from "./Container";
import FoodsCard from "./FoodsCard";
import SectionTitle from "./SectionTitle";
import BtnOutLine from "./BtnOutLine";

const FeaturedFoods = ({ foodItem }) => {
  console.log(foodItem);

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
        <div className="md:mt-14 flex items-center justify-center w-full">
          <Link to={"/available-foods"}>
            <button className="px-4 md:w-[360px] md:px-8 py-3.5 lg:py-4 font-medium text-center rounded-xl bg-black  text-white hover:bg-red-500 transition-all duration-300 text-[14px] md:text-[15px]">
              Show All
            </button>
          </Link>
        </div>
      </Container>
    </div>
  );
};
export default FeaturedFoods;
