import {
  Trash2,
  SquarePen,
  Blend,
  ArrowLeft,
  BookCopy,
  MapPin,
  Phone,
} from "lucide-react";
import { Link, useLoaderData } from "react-router";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import { useState, useEffect } from "react";
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
  const [requestFoods, setRequestFoods] = useState([]);
  console.log(requestFoods);

  const {
    foodUrl,
    foodName,
    foodQuantity,
    aditionalNote,
    _id,
    donatorName,
    donatorEmail,
    donatorPhotoUrl,
    date,
    location,
    status,
  } = foodInf || {};

  useEffect(() => {
    fetch(`http://localhost:3000/foods-requests/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Request for this food");
        setRequestFoods(data);
      });
  }, [_id]);

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
    const status = "Pending";
    const requestPepoleInfo = { name, email, photo };

    const newFoodReaquest = {
      foodId,
      status,
      location,
      contactNo,
      requestNote,
      requestPepoleInfo,
    };

    fetch("http://localhost:3000/foods-request", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newFoodReaquest),
    })
      .then((res) => res.json())
      .then((data) => {
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
          newFoodReaquest._id = data.insertedId;
          const newFoods = [...requestFoods, newFoodReaquest];
          setRequestFoods(newFoods);
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
                    {status || "Available"}
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

            {/* Request food button — only for non-owners */}
            {user?.email !== donatorEmail && (
              <button
                onClick={openFoodRequestModal}
                className="px-4 md:px-8 py-3.5 lg:py-4 font-medium text-center rounded-xl bg-black text-white hover:bg-red-500 transition-all duration-300 text-[14px] md:text-[15px] w-full cursor-pointer"
              >
                Request Food
              </button>
            )}
          </div>
        </div>

        {/* Food Request Modal */}
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

        {/* Food request table — only visible to the food owner */}
        {user?.email === donatorEmail && (
          <div className="mt-20">
            <h3 className="text-3xl md:text-5xl font-semibold sirin-stencil-regular ">
              Request For This Food:{" "}
              <span className="text-red-500">{requestFoods.length}</span>
            </h3>

            <div className="-mx-4 -my-2 mt-8 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="py-3.5 px-4 text-sm font-semibold text-left text-gray-800">
                          <div className="flex items-center gap-x-3 ml-8">
                            <BookCopy size={16} />
                            <span>Info</span>
                          </div>
                        </th>

                        <th className="px-12 py-3.5 text-sm font-semibold text-left text-gray-800">
                          <div className="flex items-center gap-x-2">
                            <Blend size={16} />
                            <span>Status</span>
                          </div>
                        </th>

                        <th className="px-4 py-3.5 text-sm font-semibold text-left text-gray-800">
                          <div className="flex items-center gap-x-2">
                            <MapPin size={16} />
                            <span>Location</span>
                          </div>
                        </th>

                        <th className="px-4 py-3.5 text-sm font-semibold text-left text-gray-800">
                          <div className="flex items-center gap-x-2">
                            <Phone size={16} />
                            <span>Contact No</span>
                          </div>
                        </th>

                        <th className="px-4 py-3.5 text-sm font-semibold text-left text-gray-800">
                          Actions
                        </th>
                      </tr>
                    </thead>

                    <tbody className="bg-white divide-y divide-gray-200">
                      {requestFoods.map((food, index) => (
                        <tr key={food?._id || index}>
                          <td className="px-4 md:px-8 py-4 md:py-6 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div className="inline-flex items-center gap-x-3">
                              <p className="font-bold mr-2">{index + 1}</p>
                              <div className="flex items-center gap-x-2">
                                <div className="h-[50px] w-[50px]">
                                  <img
                                    className="object-cover w-full h-full rounded-xl"
                                    src={
                                      food?.requestPepoleInfo?.photo ||
                                      "https://via.placeholder.com/40"
                                    }
                                    alt={
                                      food?.requestPepoleInfo?.name || "Donator"
                                    }
                                  />
                                </div>
                                <div>
                                  <p>{food?.requestPepoleInfo?.name}</p>
                                  <p>{food?.requestPepoleInfo?.email}</p>
                                </div>
                              </div>
                            </div>
                          </td>

                          <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                              <h2 className="text-sm font-normal text-emerald-700">
                                {food.status || "Pending"}
                              </h2>
                            </div>
                          </td>

                          <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap">
                            {food.location || "Unnamed"}
                          </td>

                          <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap">
                            {food.contactNo || "N/A"}
                          </td>

                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <div className="flex items-center gap-x-6">
                              <button
                                className="text-gray-500 cursor-pointer transition-colors duration-200 hover:text-red-500 focus:outline-none"
                                title="Delete"
                              >
                                <Trash2 />
                              </button>

                              <button
                                className="text-gray-500 cursor-pointer transition-colors duration-200 hover:text-yellow-500 focus:outline-none"
                                title="Edit"
                              >
                                <SquarePen />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default FoodDetails;
