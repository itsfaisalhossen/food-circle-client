import { Link } from "react-router";
import Container from "./Container";
import {
  Facebook,
  Instagram,
  Twitter,
  UtensilsCrossed,
  X,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black py-12 md:py-20">
      <Container>
        {/* Newsletter Section */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <h1 className="max-w-lg text-xl font-semibold tracking-tight text-white xl:text-xl">
              Subscribe to our newsletter to get updates.
            </h1>

            <form className="flex flex-col mx-auto gap-2 mt-6 space-y-3 md:space-y-0 md:flexrow">
              <input
                id="email"
                type="email"
                required
                placeholder="Email Address"
                className="px-4 py-2.5 md:py-3 text-gray-700 bg-white border rounded-xl md:w-1/2 w-full"
              />
              <input
                type="submit"
                value="Subscribe"
                className="px-4 mt-3 cursor-pointer md:px-8 py-2.5 md:py-3 text-center rounded-xl bg-gray-700  text-white hover:bg-red-500 transition-all md:w-1/2 w-full duration-300 text-[14px] md:text-[15px]"
              ></input>
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-semibold text-white dark:text-white">
              Quick Link
            </p>
            <div className="flex flex-col items-start mt-5 space-y-2 md:space-y-5">
              <Link
                to={""}
                className=" text-white text-sm transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                Home
              </Link>
              <Link
                to={""}
                className=" text-white text-sm transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                Who We Are
              </Link>
              <Link
                to={""}
                className=" text-white text-sm transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                Our Philosophy
              </Link>
            </div>
          </div>

          {/* Industries */}
          <div>
            <p className="font-semibold text-white dark:text-white">
              Industries
            </p>
            <div className="flex flex-col items-start mt-5 space-y-2 md:space-y-5">
              <Link
                to={""}
                className=" text-white text-sm transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                Retail &amp; E-Commerce
              </Link>
              <Link
                to={""}
                className=" text-white text-sm transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                Information Technology
              </Link>
              <Link
                to={""}
                className=" text-white text-sm transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                Finance &amp; Insurance
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 md:my-12 border-gray-200" />

        {/* Bottom Section */}
        <div className="flex items-center justify-between">
          <Link to={"/"} className="flex items-center gap-2">
            <p className="font-semibold text-white sirin-stencil-regular flex items-center gap-2 text-lg md:text-2xl">
              <UtensilsCrossed size={32} color="#FA360F" /> FoodCircle
            </p>
          </Link>

          <div className="flex -mx-2">
            {/* Reddit */}
            <p className="mx-2 cursor-pointer  text-white text-sm transition-colors duration-300 dark:text-gray-300 hover:text-red-500">
              <X />
            </p>

            {/* Facebook */}
            <p className="mx-2 cursor-pointer  text-white text-sm transition-colors duration-300 dark:text-gray-300 hover:text-red-500">
              <Facebook />
            </p>

            {/* insta */}
            <p className="mx-2 cursor-pointer  text-white text-sm transition-colors duration-300 dark:text-gray-300 hover:text-red-500">
              <Instagram />
            </p>

            {/* youtubbe */}
            <p className="mx-2 cursor-pointer  text-white text-sm transition-colors duration-300 dark:text-gray-300 hover:text-red-500">
              <Youtube />
            </p>
          </div>
        </div>
        {/* </div> */}
      </Container>
    </footer>
  );
};
export default Footer;
