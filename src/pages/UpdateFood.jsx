import { useLoaderData } from "react-router";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const UpdateFood = () => {
  const foodInfo = useLoaderData();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const foodName = form.foodName.value;
    const foodUrl = form.foodUrl.value;
    const location = form.location.value;
    const date = form.date.value;
    const foodQuantity = Number(e.target.foodQuantity.value);
    const status = form.status.value;
    const aditionalNote = form.aditionalNote.value;

    const updatedFood = {
      foodName,
      foodUrl,
      location,
      date,
      foodQuantity,
      status,
      aditionalNote,
    };

    fetch(`https://foods-circle-api-server.vercel.app/foods/${foodInfo?._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedFood),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Update response:", data);

        const modifiedCount = data.result?.modifiedCount || data.modifiedCount;

        if (modifiedCount > 0) {
          toast.success("Food Updated Successfully!", {
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
        } else {
          toast.error("No changes detected or update failed.");
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something went wrong while updating!");
      });
  };

  return (
    <div className="my-14 md:my-24">
      <Helmet>
        <title>FoodCircle | Updated Food</title>
      </Helmet>
      <Container>
        <SectionTitle
          title1="Update Your Food"
          title2="Easily update your donated food details to keep information accurate, helping others find fresh, available meals."
        />

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* --- Food Information --- */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Food Name
              </label>
              <input
                type="text"
                name="foodName"
                defaultValue={foodInfo?.foodName}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 
                focus:ring focus:ring-red-400 focus:border-transparent outline-none"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Food Image URL
              </label>
              <input
                type="text"
                name="foodUrl"
                defaultValue={foodInfo?.foodUrl}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 
                focus:ring focus:ring-red-400 focus:border-transparent outline-none"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Food Quantity
              </label>
              <input
                type="number"
                name="foodQuantity"
                defaultValue={foodInfo?.foodQuantity}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 
                focus:ring focus:ring-red-400 focus:border-transparent outline-none"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Pickup Location
              </label>
              <input
                type="text"
                name="location"
                defaultValue={foodInfo?.location}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 
                focus:ring focus:ring-red-400 focus:border-transparent outline-none"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Expire Date
              </label>
              <input
                type="date"
                name="date"
                defaultValue={foodInfo?.date}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 
                focus:ring focus:ring-red-400 focus:border-transparent outline-none"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Status
              </label>
              <input
                type="text"
                name="status"
                defaultValue={foodInfo?.status}
                readOnly
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-100 text-gray-500 cursor-not-allowed"
              />
            </div>
          </div>

          {/* --- Additional Notes --- */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Additional Notes
            </label>
            <textarea
              name="aditionalNote"
              defaultValue={foodInfo?.aditionalNote}
              rows="4"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 
              focus:ring focus:ring-red-400 focus:border-transparent outline-none resize-none"
            ></textarea>
          </div>

          {/* --- Submit Button --- */}
          <div className="text-center">
            <input
              type="submit"
              value="Update Food"
              className="lg:w-1/2 cursor-pointer px-6 md:px-10 py-2.5 md:py-3 text-center 
              rounded-xl bg-gray-950 text-white hover:bg-red-500 transition-all duration-300 
              text-[14px] font-semibold md:text-[18px]"
            />
          </div>
        </form>
      </Container>
    </div>
  );
};

export default UpdateFood;
