import BtnPrimary from "./BtnPrimary";
import Container from "./Container";
import SectionTitle from "./SectionTitle";

const OurMission = () => {
  return (
    <section className="bg-white py-16">
      <Container>
        <div>
          <SectionTitle title1={"Our Mission"} />
          <div className="lg:flex lg:items-center lg:gap-12">
            {/* Left Side Image */}
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <img
                src="https://plus.unsplash.com/premium_photo-1733266905110-eab44e3aed74?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
                alt="Food sharing community"
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>

            {/* Right Side Content */}
            <div className="lg:w-1/2">
              <h3 className="text-2xl sirin-stencil-regular font-semibold text-gray-800 mb-4">
                Sharing Food, Spreading Kindness
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                At{" "}
                <span className="font-semibold text-red-600">Food Circle</span>,
                we believe that no good food should go to waste. Our mission is
                to connect people with surplus food to those who need it —
                creating a circle of generosity, sustainability, and care in
                every community.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6 md:mb-10">
                Through our easy-to-use platform, anyone can post food they wish
                to donate, browse available items nearby, and help reduce food
                waste while supporting others.
              </p>
              <BtnPrimary text={"Join the Circle"} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default OurMission;
