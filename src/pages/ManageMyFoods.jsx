import {
  Trash2,
  SquarePen,
  Blend,
  MailCheck,
  Barrel,
  UserRoundMinus,
} from "lucide-react";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";

const ManageMyFoods = () => {
  return (
    <div className="my-14 md:my-24 ">
      <SectionTitle
        title1={"Manage My Foods"}
        title2={
          "Easily edit, or remove your shared food items and track donation activity in one place."
        }
      />
      <Container>
        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-semibold text-left text-gray-800"
                      >
                        <div className="flex items-center gap-x-3">
                          <UserRoundMinus size={16} />
                          <span>Name</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-12 py-3.5 text-sm font-semibold text-left text-gray-800"
                      >
                        <button className="flex items-center gap-x-2">
                          <Blend size={16} />
                          <span>Status</span>
                        </button>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-semibold text-left text-gray-800"
                      >
                        <button className="flex items-center gap-x-2">
                          <Barrel size={16} />
                          <span>Food</span>
                        </button>
                      </th>

                      <th
                        scope="col"
                        className="px-4 flex items-center gap-2 py-3.5 text-sm font-semibold text-left text-gray-800"
                      >
                        <MailCheck size={16} />
                        <span>Email</span>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-semibold text-left text-gray-800"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {/* Example Row */}
                    <tr>
                      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div className="inline-flex items-center gap-x-3">
                          {/* <input
                          type="checkbox"
                          className="text-blue-500 border-gray-300 rounded"
                        /> */}
                          <p>1</p>
                          <div className="flex items-center gap-x-2">
                            <img
                              className="object-cover w-10 h-10 rounded-full"
                              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=880&q=80"
                              alt=""
                            />
                            <div>
                              <h2 className="font-medium text-gray-800">
                                Arthur Melo
                              </h2>
                              <p className="text-sm font-normal text-gray-600">
                                @authurmelo
                              </p>
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                          <h2 className="text-sm font-normal text-emerald-500">
                            Active
                          </h2>
                        </div>
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                        Design Director
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                        authurmelo@example.com
                      </td>

                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-6">
                          <button className="text-gray-500 cursor-pointer transition-colors duration-200 hover:text-red-500 focus:outline-none">
                            <Trash2 />
                          </button>

                          <button className="text-gray-500 cursor-pointer transition-colors duration-200 hover:text-yellow-500 focus:outline-none">
                            <SquarePen />
                          </button>
                        </div>
                      </td>
                    </tr>
                    {/* Add more rows as needed */}
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
