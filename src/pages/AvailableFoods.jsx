import { useLoaderData } from "react-router";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import FoodsCard from "../components/FoodsCard";

const AvailableFoods = () => {
  const availableFoods = useLoaderData();

  return (
    <div className="my-14 md:my-24 ">
      <Container>
        <SectionTitle
          title1={"Available Foods 🍲"}
          title2={
            "Discover a variety of fresh, surplus meals shared by the community, ready for pickup and enjoyment."
          }
        />
        <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {availableFoods.map((food) => {
            return <FoodsCard key={food?._id} food={food} />;
          })}
        </div>
      </Container>
    </div>
  );
};
export default AvailableFoods;
