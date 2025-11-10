import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import useAuth from "../hooks/useAuth";

const AddFood = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div className="my-14 md:my-24 ">
      <Container>
        <div className="flex items-center justify-center">
          <div className="bg-white/80 w-full backdrop-blur-xl shadow-md rounded-3xl p-6 md:p-10 border border-gray-100 ">
            <div className="text-center mb-10">
              <SectionTitle
                title1={"Add Food Item 🍲"}
                title2={"Share your surplus food with the community"}
              />
            </div>

            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700 ">
                    Food Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Homemade Pasta"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200  bg-white text-gray-700 dark:text-gray-200 focus:ring focus:ring-red-400 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700 ">
                    Food Image
                  </label>
                  <input
                    type="file"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200  bg-white text-gray-700 dark:text-gray-200 focus:ring focus:ring-red-400 focus:border-transparent outline-none cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700 ">
                    Food Quantity
                  </label>
                  <input
                    type="text"
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
                  placeholder="Describe the food or special instructions..."
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200  bg-white text-gray-700 dark:text-gray-200 focus:ring focus:ring-red-400 focus:border-transparent outline-none resize-none"
                ></textarea>
              </div>

              <div className="mt-10 bg-red-50/60 border border-red-100 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-balck mb-4">
                  Donator Information
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
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
                      readOnly
                      className="w-full px-4 py-2 rounded-xl border border-gray-200  bg-white text-gray-700 dark:text-gray-200 focus:ring focus:ring-red-400 focus:border-transparent outline-none resize-none"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <img
                      src={user.photoURL}
                      alt="User"
                      className="w-16 h-16 rounded-full border-2 border-red-400 shadow-md"
                    />
                    <p className="text-sm mt-2 text-gray-500 dark:text-gray-400">
                      Profile Image
                    </p>
                  </div>
                </div>
              </div>

              <div className=" text-center">
                <button
                  type="button"
                  className="cursor-pointer px-4 md:px-8 py-2 md:py-2.5 text-center rounded-full bg-gray-800 text-white hover:bg-red-500 transition-all duration-300 text-[14px] md:text-[15px]"
                >
                  + Add Food
                </button>
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
