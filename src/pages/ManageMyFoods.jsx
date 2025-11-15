import {
  Trash2,
  SquarePen,
  Blend,
  MailCheck,
  Barrel,
  Salad,
} from "lucide-react";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import { Link } from "react-router";
import { Helmet } from "react-helmet";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  delay: 40,
  duration: 600,
});

const ManageMyFoods = () => {
  const { user } = useAuth();
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      setLoading(true);
      fetch(
        `https://foods-circle-api-server.vercel.app/foods?email=${user.email}`
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

  const handleDeleteFood = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("now delete", _id);
        fetch(`https://foods-circle-api-server.vercel.app/foods/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("after delete", data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your food has been deleted.",
                icon: "success",
              });

              //
              const remainingFoods = foods.filter((food) => food._id !== _id);
              setFoods(remainingFoods);
            }
          });
      }
    });
  };

  if (loading) {
    return (
      <Container>
        <div className="text-center py-34">
          <div className="animate-spin rounded-full h-14 w-14 border-b-4 border-red-700 mx-auto"></div>
        </div>
      </Container>
    );
  }

  return (
    <div className="my-14 md:my-24">
      <Helmet>
        <title>FoodCircle | Manage Foods</title>
      </Helmet>
      <SectionTitle
        title1="Manage My Foods"
        title2="Easily edit or remove your shared food items and track donation activity in one place."
      />
      <Container>
        <div data-aos="fade-up">
          <h3 className="text-lg text-center font-semibold mb-4 text-red-500">
            Foods: {foods.length}
          </h3>
        </div>

        <div data-aos="fade-up" className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="py-3.5 px-4 text-sm font-semibold text-left text-gray-800">
                        <div className="flex items-center gap-x-3 ml-8">
                          <Salad size={16} />
                          <span>Foods</span>
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
                          <Barrel size={16} />
                          <span>Name</span>
                        </div>
                      </th>

                      <th className="px-4 py-3.5 text-sm font-semibold text-left text-gray-800">
                        <div className="flex items-center gap-x-2">
                          <MailCheck size={16} />
                          <span>Email</span>
                        </div>
                      </th>

                      <th className="px-4 py-3.5 text-sm font-semibold text-left text-gray-800">
                        Actions
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
                              <div className="h-[100px] w-[100px]">
                                <img
                                  className="object-cover w-full h-full rounded-xl"
                                  src={
                                    food.foodUrl ||
                                    "https://via.placeholder.com/40"
                                  }
                                  alt={food.donatorName || "Donator"}
                                />
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                            <h2 className="text-sm font-normal text-emerald-700">
                              {food.status || "Available"}
                            </h2>
                          </div>
                        </td>

                        <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {food.foodName || "Unnamed Food"}
                        </td>

                        <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {food.donatorEmail || "N/A"}
                        </td>

                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="flex items-center gap-x-6">
                            <button
                              onClick={() => handleDeleteFood(food._id)}
                              className="text-gray-500 cursor-pointer transition-colors duration-200 hover:text-red-500 focus:outline-none"
                              title="Delete"
                            >
                              <Trash2 />
                            </button>

                            <Link to={`/update-food/${food?._id}`}>
                              <button
                                className="text-gray-500 cursor-pointer transition-colors duration-200 hover:text-yellow-500 focus:outline-none"
                                title="Edit"
                              >
                                <SquarePen />
                              </button>
                            </Link>
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
      </Container>
    </div>
  );
};

export default ManageMyFoods;
