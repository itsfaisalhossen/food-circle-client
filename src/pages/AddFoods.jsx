import toast from "react-hot-toast";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import useAuth from "../hooks/useAuth";

const AddFood = () => {
  const { user } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const foodName = e.target.foodName.value;
    const foodUrl = e.target.foodUrl.value;
    const location = e.target.location.value;
    const date = e.target.date.value;
    const foodQuantity = e.target.foodQuantity.value;
    const status = e.target.status.value;
    const aditionalNote = e.target.aditionalNote.value;
    const donatorName = e.target.donatorName.value;
    const donatorEmail = e.target.donatorEmail.value;
    const donatorPhotoUrl = user?.photoURL;
    const newFoods = {
      foodName,
      foodUrl,
      location,
      date,
      foodQuantity,
      status,
      aditionalNote,
      donatorName,
      donatorEmail,
      donatorPhotoUrl,
    };

    fetch("http://localhost:3000/foods", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newFoods),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data is submite successful", data);
        if (data.insertedId) {
          toast.success("Food Added Successful", {
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
  };

  return (
    <div className="my-14 md:my-24 ">
      <Container>
        <div className="text-center mb-10">
          <SectionTitle
            title1={"Add Food Item 🍲"}
            title2={
              "Share your surplus food with the community. Easily add your homemade or surplus food items to share with the community and reduce waste."
            }
          />
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-white/80 w-full backdrop-blur-xl shadow-md rounded-3xl p-6 md:p-10 border border-gray-100 ">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700 ">
                    Food Name
                  </label>
                  <input
                    type="text"
                    name="foodName"
                    required
                    placeholder="e.g. Homemade Pasta"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200  bg-white text-gray-700 dark:text-gray-200 focus:ring focus:ring-red-400 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700 ">
                    Food Image
                  </label>
                  <input
                    type="text"
                    name="foodUrl"
                    required
                    placeholder="e.g. Food Photo_url"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200  bg-white text-gray-700 dark:text-gray-200 focus:ring focus:ring-red-400 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700 ">
                    Food Quantity
                  </label>
                  <input
                    type="number"
                    name="foodQuantity"
                    required
                    placeholder="e.g. Serves 2 people"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200  bg-white text-gray-700 dark:text-gray-200 focus:ring focus:ring-red-400 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700 ">
                    Pickup Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    required
                    placeholder="Enter pickup location"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200  bg-white text-gray-700 dark:text-gray-200 focus:ring focus:ring-red-400 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700 ">
                    Expire Date
                  </label>

                  <input
                    type="date"
                    name="date"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200  bg-white text-gray-700 dark:text-gray-200 focus:ring focus:ring-red-400 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700 ">
                    Status
                  </label>
                  <input
                    type="text"
                    value="Available"
                    name="status"
                    required
                    readOnly
                    className="w-full px-4 py-3 rounded-xl border border-gray-200  bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                  />
                </div>
              </div>
              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-700 ">
                  Additional Notes
                </label>
                <textarea
                  name="aditionalNote"
                  required
                  type="text"
                  placeholder="Describe the food or special instructions..."
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200  bg-white text-gray-700 dark:text-gray-200 focus:ring focus:ring-red-400 focus:border-transparent outline-none resize-none"
                ></textarea>
              </div>
              <div className="mt-10 bg-red-50/60 border border-red-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-balck mb-4">
                  Donator Information
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className=" ">
                    <img
                      src={user?.photoURL}
                      title={user?.displayName}
                      referrerPolicy="no-policy"
                      alt="User"
                      className="w-14 h-14 rounded-full border-2 border-red-400 shadow-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      name="donatorName"
                      required
                      value={user?.displayName}
                      readOnly
                      className=" w-full px-4 py-2 rounded-xl border border-gray-200  bg-white text-gray-700 dark:text-gray-200 focus:ring focus:ring-red-400 focus:border-transparent outline-none resize-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">
                      Email
                    </label>
                    <input
                      type="text"
                      value={user?.email}
                      required
                      name="donatorEmail"
                      readOnly
                      className="w-full px-4 py-2 rounded-xl border border-gray-200  bg-white text-gray-700 dark:text-gray-200 focus:ring focus:ring-red-400 focus:border-transparent outline-none resize-none"
                    />
                  </div>
                </div>
              </div>
              <div className=" text-center">
                <input
                  type="submit"
                  value="Add Food +"
                  className="lg:w-1/2 cursor-pointer px-6 md:px-10 py-2.5 md:py-3 text-center rounded-xl bg-gray-950 text-white hover:bg-red-500 transition-all duration-300 text-[14px] font-semibold md:text-[18px]"
                />
              </div>
            </form>
          </div>
        </div>

        <div className="w-full mx-auto my-12 md:my-24">
          <div className="mb-8">
            <SectionTitle title1={"🌿 Food Sharing Tips"} />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Use Fresh Containers",
                desc: "Pack your food in clean, airtight containers to keep it fresh longer.",
                icon: "🥡",
              },
              {
                title: "Label Clearly",
                desc: "Write the date and contents on the box to help receivers identify easily.",
                icon: "🏷️",
              },
              {
                title: "Stay Hygienic",
                desc: "Always wear gloves or wash hands before handling donated food.",
                icon: "🧼",
              },
            ].map((tip, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="text-4xl mb-3">{tip.icon}</div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                  {tip.title}
                </h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {tip.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full mx-auto bg-white/10 rounded-3xl text-black shadow-md p-6 md:p-10 text-center border border-gray-200">
          <div className="mb-10">
            <SectionTitle
              title1={"Community Impact"}
              title2={"Together we’re reducing waste and feeding smiles!"}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-4xl font-extrabold">1,245+</h4>
              <p className="text-sm opacity-90">Meals Shared</p>
            </div>
            <div>
              <h4 className="text-4xl font-extrabold">870 kg</h4>
              <p className="text-sm opacity-90">Food Saved</p>
            </div>
            <div>
              <h4 className="text-4xl font-extrabold">540+</h4>
              <p className="text-sm opacity-90">Happy Donors</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AddFood;
