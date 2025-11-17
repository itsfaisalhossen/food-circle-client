import { useEffect, useState } from "react";
import FeaturedFoods from "../components/FeaturedFoods";
import HeroBanner from "../components/HeroBanner";
import HowItWorksSection from "../components/HowItWorksSection";
import NewsletterCTASection from "../components/NewsletterCTASection";
import OurMission from "../components/OurMission";
import SafetySection from "../components/SafetySection";
import { Helmet } from "react-helmet";
import Loading from "../components/Loading";

const fetchFoodsData = async () => {
  const res = await fetch(
    "https://foods-circle-api-server.vercel.app/featured-foods"
  );
  return res.json();
};

const Home = () => {
  const [foodItem, setFoodItem] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchFoodsData();
        setFoodItem(data);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) {
    return <Loading />;
  }

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
