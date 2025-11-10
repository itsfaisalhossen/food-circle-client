import BtnOutLine from "./BtnOutLine";
import BtnPrimary from "./BtnPrimary";
import Container from "./Container";

const HeroBanner = () => {
  return (
    <div>
      <Container>
        <section className="relative bg[#0f0f0f] text-white overflow-hidden">
          <div className="flex flex-col-reverse lg:flex-row items-center py-24 gap-12">
            {/* Left Content */}
            <div className="w-full lg:w-1/2">
              <p className="text-red-400 text-sm font-semibold mb-2">
                Share & Save
              </p>
              <h1 className="sirin-stencil-regular text-4xl text-black md:text-6xl font-extrabold leading-tight mb-4">
                Share{" "}
                <span className="text-red-500 sirin-stencil-regular">
                  &amp; Enjoy
                </span>{" "}
                Healthy Food
              </h1>
              <p className="text-gray-800 text-lg mb-8 max-w-md">
                Join{" "}
                <span className="font-semibold text-red-400">Food Circle</span>{" "}
                — a platform where people share surplus meals with others to
                reduce food waste and build a caring community.
              </p>

              <div className="flex items-center gap-4">
                <BtnPrimary text={"🍽️ View All Foods"} link={"/"} />
                <input
                  placeholder="🔍 Search Foods"
                  className="px-4 md:px-6 border-2 py-2 md:py-3 rounded-full border-red-500 text-black transition-all duration-300 textxl"
                  type="text"
                />
              </div>
            </div>

            {/* Right Content (Image Area) */}
            <div className="w-full lg:w-1/2 relative max-md:mt-10 flex justify-center">
              {/* Background circular badge */}
              <div className="absolute -bottom-10 -left-8 hidden md:block">
                <img
                  src="https://images.unsplash.com/photo-1683260644159-e8423e0fb44f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2080"
                  alt="circle"
                  className="w-40 h-40 opacity-80 object-cover rounded-full animate-spin-slow"
                />
              </div>

              {/* Main Food Image */}
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1447078806655-40579c2520d6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
                  alt="Shared Food"
                  className="rounded-3xl shadow-2xl w-[320px] md:w-[420px]"
                />
                <img
                  src="https://plus.unsplash.com/premium_photo-1723795410688-4165e31bd01e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
                  alt="Extra Dish"
                  className="absolute -top-20 -right-10 rounded-2xl w-40 md:w-56"
                />
              </div>
            </div>
          </div>

          {/* Decorative gradient blobs */}
          <div className="absolute top-0 left-20 w-60 h-60 bg-red-400 opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-20 w-72 h-72 bg-red-600 opacity-10 rounded-full blur-3xl"></div>
        </section>
      </Container>
    </div>
  );
};
export default HeroBanner;
