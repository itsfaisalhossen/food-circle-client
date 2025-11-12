import { Link, useLoaderData } from "react-router";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  delay: 40,
  duration: 1000,
});

const FoodDetails = () => {
  const foodInf = useLoaderData();
  const [isOpen, setIsOpen] = useState(false);
  const {
    foodUrl,
    foodName,
    foodQuantity,
    aditionalNote,
    _id,
    donatorName,
    donatorEmail,
    donatorPhotoUrl,
    status,
    date,
    location,
  } = foodInf || {};

  const handleFoodReq = () => {
    setIsOpen(true);
  };

  return (
    <div className="my-14 md:my-24">
      <Container>
        <SectionTitle
          title1={"Food Details"}
          title2={
            "Explore complete food details, including ingredients, quantity, location, donor info, and pickup availability for requests."
          }
        />
        <div
          data-aos="fade-up"
          className="flex flex-col md:flex-row justify-between gap-10 items-center"
        >
          <div className="flex-1 w-full">
            <div className="h-[380px] md:h-[560px]">
              <img
                src={foodUrl}
                className="w-full rounded-2xl h-full object-cover"
                alt=""
              />
            </div>
            <div>
              <h3 className="text-xl font-medium my-4">Food Description</h3>
              <hr />
              <p className="mt-2">{aditionalNote}</p>
            </div>
          </div>
          <div className="flex-1  space-y-8 w-full">
            <div>
              <Link
                to={"/available-foods"}
                className="flex text-red-400 hover:text-red-500 hover:underline duration-300 font-medium items-center gap-2 md:mb-5"
              >
                <ArrowLeft /> Back to Foods
              </Link>
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-3xl font-extrabold sirin-stencil-regular my-4">
                    {foodName}
                  </h2>
                  <p className="p-1 bg-red-50 w-[100px] text-center rounded-2xl">
                    {status}
                  </p>
                </div>

                <div className="font-medium">
                  <p>Expire Date: {date}</p>
                  <h4>Queantity: {foodQuantity}</h4>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-xl p-5">
              <h3 className="text-xl font-medium mb-4">Product Details</h3>
              <h4>Location: {location}</h4>
              <h4>Food ID: {_id}</h4>
            </div>
            <div className="bg-gray-100 rounded-xl p-5">
              <h3 className="text-xl font-medium mb-4">
                Food Donate Information
              </h3>
              <div className="flex items-center gap-2.5">
                <img
                  className="h-12 w-12 border-2 border-red-300 rounded-full object-cover"
                  src={donatorPhotoUrl}
                  alt=""
                />
                <div>
                  <h4>{donatorName}</h4>
                  <p>{donatorEmail}</p>
                </div>
              </div>
            </div>
            <button
              onClick={handleFoodReq}
              className="px-4 md:px-8 py-3.5 lg:py-4 font-medium text-center rounded-xl bg-black  text-white hover:bg-red-500 transition-all duration-300 text-[14px] md:text-[15px] w-full cursor-pointer"
            >
              Request Food
            </button>
          </div>
        </div>
        <div className="relative flex justify-center">
          {isOpen && (
            <div
              className="fixed inset-0 z-10 overflow-y-auto"
              aria-labelledby="modal-title"
              role="dialog"
              aria-modal="true"
            >
              <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                <span
                  className="hidden sm:inline-block sm:align-middle sm:h-screen"
                  aria-hidden="true"
                >
                  &#8203;
                </span>

                <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl rtl:text-right sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                  <div>
                    <div className="flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8 text-gray-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                        />
                      </svg>
                    </div>

                    <div className="mt-2 text-center">
                      <h3
                        className="text-lg font-medium leading-6 text-gray-800 capitalize"
                        id="modal-title"
                      >
                        Archive Project
                      </h3>
                      <p className="mt-2 text-sm text-gray-500">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Aspernatur dolorum aliquam ea, ratione deleniti
                        porro officia? Explicabo maiores suscipit.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 sm:flex sm:items-center sm:justify-between">
                    <a
                      href="#"
                      className="text-sm text-blue-500 hover:underline"
                    >
                      Learn more
                    </a>

                    <div className="sm:flex sm:items-center">
                      <button
                        onClick={() => setIsOpen(false)}
                        className="w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:mt-0 sm:w-auto sm:mx-2 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                      >
                        Cancel
                      </button>

                      <button className="w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:w-auto sm:mt-0 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                        Archive
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};
export default FoodDetails;
