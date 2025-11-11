import Container from "./Container";
import FoodsCard from "./FoodsCard";
import SectionTitle from "./SectionTitle";

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
      </Container>
    </div>
  );
};
export default FeaturedFoods;
