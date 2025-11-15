import BtnPrimary from "./BtnPrimary";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  delay: 40,
  duration: 800,
});

const FoodsCard = ({ food }) => {
  const { _id, foodName, foodUrl, foodQuantity, status } = food;
  console.log(food);

  return (
    <div
      data-aos="fade-up"
      className="w-full flex gap-4 flex-col justify-between bg-gray-100 hover:bg-red-100 duration-700 transition-all p-6 md:p-8 rounded-2xl"
    >
      <div className="h-[380px] overflow-hidden rounded-2xl">
        <img
          className="w-full h-full object-cover rounded-2xl transition-transform duration-500 hover:scale-110"
          src={foodUrl}
          alt=""
        />
      </div>
      <div className="my-3 md:my-4">
        <p className="px-1 py-1 text-sm rounded-md font-medium bg-white mb-2 w-[90px] text-center">
          {status}
        </p>
        <div className="flex items-center justify-between mt-4">
          <h2 className="sirin-stencil-regular font-bold text-xl md:text-2xl">
            {foodName}
          </h2>
          <h3 className="sirin-stencil-regular font-bold text-lg">
            Quantity : {foodQuantity}
          </h3>
        </div>
      </div>
      <BtnPrimary link={`/food/${_id}`} text={"View Details"} />
    </div>
  );
};
export default FoodsCard;
