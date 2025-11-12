import { Utensils, Heart, ShieldCheck } from "lucide-react";
import SectionTitle from "./SectionTitle";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Utensils,
      title: "1. Post Surplus Meal",
      description:
        "Finished cooking too much? Snap a quick photo, describe the dish, and list the portion size in minutes.",
      color: "text-green-400",
      bg: "bg-green-400/10",
    },
    {
      icon: Heart,
      title: "2. Connect & Reserve",
      description:
        "Users in your area receive a notification. They can reserve the meal instantly through our secure chat system.",
      color: "text-red-400",
      bg: "bg-red-400/10",
    },
    {
      icon: ShieldCheck,
      title: "3. Safe Handover",
      description:
        "Arrange a safe, contactless pickup time and location. Feel good knowing your food didn't go to waste!",
      color: "text-blue-400",
      bg: "bg-blue-400/10",
    },
  ];
  return (
    <section className=" text-white px-6">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8 text-black">
          <SectionTitle
            title1={" Simple Steps to Share Joy"}
            title2={
              " It only takes three easy steps to turn surplus food into community good"
            }
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              data-aos="zoom-in"
              key={index}
              className={`p-8 rounded-2xl ${step.bg} border border-gray-300 transition transform duration-300 hover:scale-[1] hover:shadow-md`}
            >
              <div className={`p-4 ${step.color} rounded-xl inline-flex mb-6`}>
                <step.icon size={32} strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">
                {step.title}
              </h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default HowItWorksSection;
