import BtnPrimary from "./BtnPrimary";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  delay: 40,
  duration: 800,
});

const FoodsCard = ({ food }) => {
  const {
    _id,
    foodName,
    foodUrl,
    foodQuantity,
    location,
    date,
    status,
    donatorName,
    donatorPhotoUrl,
  } = food;

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
      <div className="space-y-6 mt-3">
        <div className="flex items-center justify-between font-medium">
          <div>
            <h2 className="sirin-stencil-regular font-bold text-xl md:text-2xl">
              {foodName}
            </h2>
            <p className="text-xs mt-2">{status}</p>
          </div>
          <div className="text-sm">
            <p>Expire Date: {date}</p>
            <h3>Quantity:{foodQuantity}</h3>
          </div>
        </div>
        <div>
          <div className="mt-2 font-medium">
            <p>Pickup location: {location}</p>
          </div>
          <div className="mt-3">
            <h4 className="text-sm font-medium">Donator Info</h4>
            <div className="mt-2 flex items-center gap-2">
              <img
                className="h-10 w-10 object-cover rounded-md"
                src={donatorPhotoUrl}
                alt=""
              />
              <p className="text-xs">{donatorName}</p>
            </div>
          </div>
        </div>
      </div>
      <BtnPrimary link={`/food/${_id}`} text={"View Details"} />
    </div>
  );
};
export default FoodsCard;
