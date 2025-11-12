import { useEffect, useState } from "react";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import FoodsCard from "../components/FoodsCard";

const AvailableFoods = () => {
  const [availableFoods, setAvailableFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/foods")
      .then((res) => res.json())
      .then((data) => {
        setAvailableFoods(data);
      })
      .catch((error) => console.error("Fetch error:", error))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Container>
        <div className="text-center py-34">
          <div className="animate-spin rounded-full h-14 w-14 border-b-4 border-red-700 mx-auto"></div>
        </div>
      </Container>
    );
  }

  return (
    <div className="my-14 md:my-24 ">
      <Container>
        <SectionTitle
          title1={"Available Foods 🍲"}
          title2={"Discover a variety of fresh, surplus meals..."}
        />

        <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {availableFoods.map((food) => (
            <FoodsCard key={food?._id} food={food} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AvailableFoods;
