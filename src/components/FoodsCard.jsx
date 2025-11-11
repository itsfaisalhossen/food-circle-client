import BtnPrimary from "./BtnPrimary";

const FoodsCard = ({ food }) => {
  const { foodUrl, foodName, foodQuantity, aditionalNote, _id } = food;
  return (
    <div className="w-full flex gap-4 flex-col justify-between bg-gray-100 hover:bg-red-100 duration-700 transition-all p-6 md:p-8 rounded-2xl">
      <div className="h-[380px] overflow-hidden rounded-2xl">
        <img
          className="w-full h-full object-cover rounded-2xl transition-transform duration-500 hover:scale-110"
          src={foodUrl}
          alt=""
        />
      </div>
      <div className="space-y-6 mt-3">
        <div className="flex items-center justify-between font-medium">
          <h2 className="sirin-stencil-regular font-bold text-xl md:text-2xl">
            {foodName}
          </h2>
          <h3 className="">Quantity:{foodQuantity}</h3>
        </div>
        <p className="text-lg">{aditionalNote}</p>
      </div>
      <BtnPrimary link={_id} text={"View Details"} />
    </div>
  );
};
export default FoodsCard;
