import { Heart, ShieldCheck, Zap } from "lucide-react";
import SectionTitle from "./SectionTitle";

const SafetySection = () => {
  const safetyFeatures = [
    {
      icon: ShieldCheck,
      title: "Verified Users",
      description:
        "All active sharers are verified through a multi-step authentication process.",
    },
    {
      icon: Zap,
      title: "Hygiene Pledge",
      description:
        "Sharers must confirm adherence to high hygiene standards before listing any food.",
    },
    {
      icon: Heart,
      title: "Community Ratings",
      description:
        "Honest feedback system ensures accountability and builds trust over time.",
    },
  ];
  return (
    <section className="bg[#0f0f0f] text-black px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title1={"Share with Confidence"}
          title2={
            "Your safety and trust are our top priority. We've built Food Circlewith strict guidelines for secure sharing"
          }
        />

        <div className="grid md:grid-cols-3 gap-8">
          {safetyFeatures.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border duration-300 border-gray-300 flex flex-col items-center text-center transition hover:border-red-500"
            >
              <feature.icon className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default SafetySection;
