// import { useState } from "react";
// import { useEffect } from "react";
// import useAuth from "../hooks/useAuth";
// import Container from "../components/Container";

// const MyFoodRequests = () => {
//   const { user } = useAuth();
//   const [foods, setFoods] = useState([]);
//   const [loading, setLoading] = useState(true);
//   console.log(foods);

//   useEffect(() => {
//     if (user?.email) {
//       setLoading(true);
//       fetch(` /foods-request?email=${user?.email}`)
//         .then((res) => res.json())
//         .then((data) => {
//           console.log(data);
//           setFoods(data);
//         })
//         .catch((err) => console.error("Error fetching foods:", err))
//         .finally(() => {
//           setLoading(false);
//         });
//     }
//   }, [user?.email]);

//   if (loading) {
//     return (
//       <Container>
//         <div className="text-center py-34">
//           <div className="animate-spin rounded-full h-14 w-14 border-b-4 border-red-700 mx-auto"></div>
//         </div>
//       </Container>
//     );
//   }
//   return (
//     <div className="my-14 md:my-24 ">
//       <Container>MyFoodRequests</Container>
//     </div>
//   );
// };
// export default MyFoodRequests;

import { Blend, ArrowLeft, BookCopy, MapPin, Phone } from "lucide-react";

import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import LoadingSpinner from "../components/LoadingSpinner"; // optional, if you have a spinner component
// import toast from "react-hot-toast";

const MyFoodRequests = () => {
  const { user } = useAuth();
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(foods);

  useEffect(() => {
    if (user?.email) {
      setLoading(true);
      fetch(
        `https://foods-circle-api-server.vercel.app/foods-request?email=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setFoods(data);
        })
        .catch((err) => console.error("Error fetching foods:", err))
        .finally(() => {
          setLoading(false);
        });
    }
  }, [user?.email]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <LoadingSpinner /> {/* or just "Loading..." */}
      </div>
    );
  }

  return (
    <div className="my-14 md:my-24">
      <Container>
        <SectionTitle title1="My Food Requests 🍽️" />
        <div data-aos="fade-up" className="flex flex-col mt-6">
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
                    </tr>
                  </thead>

                  <tbody className="bg-white divide-y divide-gray-200">
                    {foods.map((food, index) => (
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
                                <p className="text-gray-500 text-sm">
                                  {food?.requestPepoleInfo?.email}
                                </p>
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div
                            className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${
                              food.status === "Approved"
                                ? "bg-green-100/60"
                                : food.status === "Rejected"
                                ? "bg-red-100/60"
                                : "bg-yellow-100/60"
                            }`}
                          >
                            <span
                              className={`h-1.5 w-1.5 rounded-full ${
                                food.status === "Approved"
                                  ? "bg-green-500"
                                  : food.status === "Rejected"
                                  ? "bg-red-500"
                                  : "bg-yellow-500"
                              }`}
                            ></span>
                            <h2 className="text-sm font-normal">
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
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MyFoodRequests;
