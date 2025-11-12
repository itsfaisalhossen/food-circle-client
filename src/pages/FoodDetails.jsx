import { Link, useLoaderData } from "react-router";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import { ArrowLeft } from "lucide-react";

const FoodDetails = () => {
  const foodInf = useLoaderData();
  console.log(foodInf);
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
  } = foodInf;

  return (
    <div className="my-14 md:my-24">
      <Container>
        <SectionTitle
          title1={"Food Details"}
          title2={
            "Explore complete food details, including ingredients, quantity, location, donor info, and pickup availability for requests."
          }
        />

        <div className="flex flex-col md:flex-row justify-between gap-10 items-center">
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
            <button className="px-4 md:px-8 py-3.5 lg:py-4 font-medium text-center rounded-xl bg-black  text-white hover:bg-red-500 transition-all duration-300 text-[14px] md:text-[15px] w-full cursor-pointer">
              Request Food
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default FoodDetails;
