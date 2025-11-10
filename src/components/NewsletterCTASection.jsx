import { Bell } from "lucide-react";
import SectionTitle from "./SectionTitle";
import BtnOutLine from "./BtnOutLine";

const NewsletterCTASection = () => {
  return (
    <section className=" text-white px-6 mb-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center p-8 md:p-16 bg-black rounded-3xl border border-gray-800 shadow-2xl">
          <Bell
            className="w-12 h-12 text-red-500 mx-auto mb-4"
            strokeWidth={2.5}
          />

          <div className="text-white">
            <SectionTitle
              title1={"Join the Zero-Waste Movement"}
              title2={
                "Ready to share your extra food or find a delicious, free meal nearby? Sign up now and join thousands of mindful sharers. "
              }
            />
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-4 max-w-xl mx-auto">
            <BtnOutLine text={"🍽️ Get Started"} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default NewsletterCTASection;
