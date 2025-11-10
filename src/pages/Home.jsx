import HeroBanner from "../components/HeroBanner";
import HowItWorksSection from "../components/HowItWorksSection";
import NewsletterCTASection from "../components/NewsletterCTASection";
import OurMission from "../components/OurMission";
import SafetySection from "../components/SafetySection";

const Home = () => {
  return (
    <div className="space-y-12 md:space-y-24">
      <HeroBanner />
      <HowItWorksSection />
      <OurMission />
      <SafetySection />
      <NewsletterCTASection />
    </div>
  );
};
export default Home;
