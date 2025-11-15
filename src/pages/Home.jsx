import { useEffect, useState } from "react";
import FeaturedFoods from "../components/FeaturedFoods";
import HeroBanner from "../components/HeroBanner";
import HowItWorksSection from "../components/HowItWorksSection";
import NewsletterCTASection from "../components/NewsletterCTASection";
import OurMission from "../components/OurMission";
import SafetySection from "../components/SafetySection";
import { Helmet } from "react-helmet";

const fetchFoodsData = async () => {
  const res = await fetch(
    "https://foods-circle-api-server.vercel.app/featured-foods"
  );
  return res.json();
};

const Home = () => {
  const [foodItem, setFoodItem] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchFoodsData();
      setFoodItem(data);
    };
    loadData();
  }, []);
  return (
    <div className="space-y-12 md:space-y-24">
      <Helmet>
        <title>FoodCircle | Home</title>
      </Helmet>
      <HeroBanner />
      <FeaturedFoods foodItem={foodItem} />
      <HowItWorksSection />
      <OurMission />
      <SafetySection />
      <NewsletterCTASection />
    </div>
  );
};
export default Home;
