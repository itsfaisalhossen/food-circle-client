import { Link, useLoaderData } from "react-router";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";
import useAuth from "../hooks/useAuth";

AOS.init({
  delay: 40,
  duration: 1000,
});

const FoodDetails = () => {
  const foodInf = useLoaderData();
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  console.log(user?.displayName);

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

  const openFoodRequestModal = () => {
    setIsOpen(true);
  };

  const handleFoodReq = (e) => {
    e.preventDefault();
    const form = e.target;
    const location = form.location.value;
    const contactNo = form.contactNo.value;
    const requestNote = form.requestNote.value;
    const name = user?.displayName;
    const email = user?.email;
    const photo = user?.photoURL;
    const foodId = _id;
    const requestPepoleInfo = {
      name,
      email,
      photo,
    };

    const newFoodReaquest = {
      foodId,
      status,
      location,
      contactNo,
      requestNote,
      requestPepoleInfo,
    };
    console.log(newFoodReaquest);

    fetch("http://localhost:3000/foods-request", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newFoodReaquest),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data is submite successful", data);
        if (data.insertedId) {
          toast.success("Food request submitted successfully! 🍱", {
            style: {
              border: "1px solid #713200",
              padding: "16px",
              color: "#713200",
            },
            iconTheme: {
              primary: "#713200",
              secondary: "#FFFAEE",
            },
          });
        }
        e.target.reset();
      });

    setIsOpen(false);
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
          {/* Food image and description */}
          <div className="flex-1 w-full">
            <div className="h-[380px] md:h-[560px]">
              <img
                src={foodUrl}
                className="w-full rounded-2xl h-full object-cover"
                alt={foodName}
              />
            </div>
            <div>
              <h3 className="text-xl font-medium my-4">Food Description</h3>
              <hr />
              <p className="mt-2">{aditionalNote}</p>
            </div>
          </div>

          {/* Food info and donor section */}
          <div className="flex-1 space-y-8 w-full">
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
                  <h4>Quantity: {foodQuantity}</h4>
                </div>
              </div>
            </div>

            {/* Product details */}
            <div className="bg-gray-100 rounded-xl p-5">
              <h3 className="text-xl font-medium mb-4">Product Details</h3>
              <h4>Location: {location}</h4>
              <h4>Food ID: {_id}</h4>
            </div>

            {/* Donor info */}
            <div className="bg-gray-100 rounded-xl p-5">
              <h3 className="text-xl font-medium mb-4">
                Food Donator Information
              </h3>
              <div className="flex items-center gap-2.5">
                <img
                  className="h-12 w-12 border-2 border-red-300 rounded-full object-cover"
                  src={donatorPhotoUrl}
                  alt={donatorName}
                />
                <div>
                  <h4>{donatorName}</h4>
                  <p>{donatorEmail}</p>
                </div>
              </div>
            </div>

            {/* Request food button */}
            <button
              onClick={openFoodRequestModal}
              className="px-4 md:px-8 py-3.5 lg:py-4 font-medium text-center rounded-xl bg-black text-white hover:bg-red-500 transition-all duration-300 text-[14px] md:text-[15px] w-full cursor-pointer"
            >
              Request Food
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/30 backdrop-blur-sm">
            <div className="bg-white w-full max-w-md rounded-lg shadow-xl p-6 max-h-[90vh] overflow-y-auto">
              <h3 className="text-center text-xl font-medium mb-4">
                Request Food Assistance
              </h3>
              <p className="text-center text-sm text-gray-500 mb-4">
                Provide location, contact, and reason for requesting food.
              </p>

              <form onSubmit={handleFoodReq} className="space-y-4">
                <input
                  type="text"
                  name="location"
                  required
                  placeholder="Location"
                  className="focus:ring focus:ring-red-400 focus:border-transparent outline-none resize-none w-full px-4 py-3 border rounded-md"
                />
                <input
                  type="number"
                  name="contactNo"
                  required
                  placeholder="Contact No."
                  className="focus:ring focus:ring-red-400 focus:border-transparent outline-none resize-none w-full px-4 py-3 border rounded-md"
                />
                <textarea
                  name="requestNote"
                  required
                  rows={4}
                  placeholder="Reason for food"
                  className="focus:ring focus:ring-red-400 focus:border-transparent outline-none resize-none w-full px-4 py-3 border rounded-md"
                />
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="flex-1 cursor-pointer py-2 bg-gray-200 rounded-md"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 cursor-pointer py-2 bg-black text-white rounded-md"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default FoodDetails;
