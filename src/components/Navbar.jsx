import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router";
import useAuth from "../hooks/useAuth";
import BtnPrimary from "./BtnPrimary";
import BtnOutLine from "./BtnOutLine";
// import logoIcon from "../assets/FoodCircle.png";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const { user } = useAuth();
  console.log(user);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="bg-black
     shadow md:px[70px]"
    >
      {/* <Container> */}
      <nav className="relative">
        <div className="px-4 md:px-12 lg:px-[120px]  py-6 mx-auto">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex items-center justify-between">
              <Link to={"/"} className="flex items-center gap-2">
                {/* <img
                  className="w-auto bg-red-100 h8 md:h12"
                  src="https://cdn.prod.website-files.com/653a12ff1d377f67d4b06d12/661a682bb78029611534ad68_brand-logo.svg"
                  alt="logo"
                /> */}
                <p className="font-medium text-lg md:text-xl text-white hover:textblack">
                  FoodCircle
                </p>
              </Link>

              {/* Mobile menu button */}
              <div className="flex lg:hidden">
                <button
                  onClick={() => setIsNavOpen(!isNavOpen)}
                  type="button"
                  className="text-gray-500  hover:text-gray-600 
                           dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 
                           dark:focus:text-gray-400"
                  aria-label="toggle menu"
                >
                  {!isNavOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 8h16M4 16h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Mobile menu */}
            <div
              className={`absolute inset-x-0 z-20 bg-black w-full px-6 py-4 transition-all duration-300 
                        ease-in-out bgwhite dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 
                        lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 
                        lg:flex lg:items-center 
                        ${
                          isNavOpen
                            ? "translate-x-0 opacity-100"
                            : "opacity-0 -translate-x-full"
                        }`}
            >
              <div className="flex flex-col  text-[15px] -mx-6 lg:flex-row lg:items-center lg:mx-2">
                <NavLink
                  to={"/"}
                  className="px-2 py-1.5 mx-2 mt-2 text-white hover:text-black transition-colors duration-300 
                           transform rounded-md lg:mt-0  hover:bg-gray-100 
                            "
                >
                  Home
                </NavLink>
                <NavLink
                  to={"/available-foods"}
                  className="px-2 py-1.5 mx-2 mt-2 text-white hover:text-black transition-colors duration-300 
                           transform rounded-md lg:mt-0  hover:bg-gray-100 
                            "
                >
                  Available Foods
                </NavLink>
                {/* {user && (
                  <> */}
                <NavLink
                  to={"/add-foods"}
                  className="px-2 py-1.5 mx-2 mt-2 text-white hover:text-black transition-colors duration-300 
                           transform rounded-md lg:mt-0  hover:bg-gray-100 
                            "
                >
                  Add Foods
                </NavLink>
                <NavLink
                  to={"/manage-my-foods"}
                  className="px-2 py-1.5 mx-2 mt-2 text-white hover:text-black transition-colors duration-300 
                           transform rounded-md lg:mt-0  hover:bg-gray-100 
                            "
                >
                  Manage My Foods
                </NavLink>
                <NavLink
                  to={"/my-food-requests"}
                  className="px-2 py-1.5 mx-2 mt-2 text-white hover:text-black transition-colors duration-300 
                           transform rounded-md lg:mt-0  hover:bg-gray-100 
                            "
                >
                  My Foods Request
                </NavLink>
                {/* </>
                )} */}
              </div>

              <div className="flex items-center mt-4  lg:mt-0">
                <button
                  type="button"
                  className="flex items-center focus:outline-none"
                  aria-label="toggle profile dropdown"
                >
                  {user ? (
                    <>
                      <div ref={dropdownRef} className="relative inline-block">
                        {/* Dropdown toggle button */}
                        <div
                          onClick={() => setIsOpen(!isOpen)}
                          className="w-8 h-8 overflow-hidden cursor-pointer border-2 border-gray-400 rounded-full"
                        >
                          <img
                            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                            className="object-cover w-full h-full"
                            alt="avatar"
                          />
                        </div>

                        {/* Dropdown menu */}
                        {isOpen && (
                          <div className="max-sm:hidden cursor-pointer absolute right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800 transition ease-out duration-100 transform opacity-100 scale-100">
                            <Link
                              to={"/add-foods"}
                              className="flex items-center px-3 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                              <svg
                                className="w-5 h-5 mx-1"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M6.34315 16.3431C4.84285 17.8434 4 19.8783 4 22H6C6 20.4087 6.63214 18.8826 7.75736 17.7574C8.88258 16.6321 10.4087 16 12 16C13.5913 16 15.1174 16.6321 16.2426 17.7574C17.3679 18.8826 18 20.4087 18 22H20C20 19.8783 19.1571 17.8434 17.6569 16.3431C16.1566 14.8429 14.1217 14 12 14C9.87827 14 7.84344 14.8429 6.34315 16.3431Z"
                                  fill="currentColor"
                                />
                              </svg>
                              <span className="mx-1">Add Foods</span>
                            </Link>
                            <Link
                              to={"/manage-my-foods"}
                              className="flex items-center px-3 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                              <svg
                                className="w-5 h-5 mx-1"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M6.34315 16.3431C4.84285 17.8434 4 19.8783 4 22H6C6 20.4087 6.63214 18.8826 7.75736 17.7574C8.88258 16.6321 10.4087 16 12 16C13.5913 16 15.1174 16.6321 16.2426 17.7574C17.3679 18.8826 18 20.4087 18 22H20C20 19.8783 19.1571 17.8434 17.6569 16.3431C16.1566 14.8429 14.1217 14 12 14C9.87827 14 7.84344 14.8429 6.34315 16.3431Z"
                                  fill="currentColor"
                                />
                              </svg>
                              <span className="mx-1">Manage My Foods</span>
                            </Link>
                            <Link
                              to={"/my-food-requests"}
                              className="flex items-center px-3 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                              <svg
                                className="w-5 h-5 mx-1"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M6.34315 16.3431C4.84285 17.8434 4 19.8783 4 22H6C6 20.4087 6.63214 18.8826 7.75736 17.7574C8.88258 16.6321 10.4087 16 12 16C13.5913 16 15.1174 16.6321 16.2426 17.7574C17.3679 18.8826 18 20.4087 18 22H20C20 19.8783 19.1571 17.8434 17.6569 16.3431C16.1566 14.8429 14.1217 14 12 14C9.87827 14 7.84344 14.8429 6.34315 16.3431Z"
                                  fill="currentColor"
                                />
                              </svg>
                              <span className="mx-1">My Foods Request</span>
                            </Link>

                            {/* Add other <a> elements here (same as original markup) */}
                            <hr className="border-gray-200 dark:border-gray-700" />
                            <a
                              href="#"
                              className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                              <svg
                                className="w-5 h-5 mx-1"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M19 21H10C8.89543 21 8 20.1046 8 19V15H10V19H19V5H10V9H8V5C8 3.89543 8.89543 3 10 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21ZM12 16V13H3V11H12V8L17 12L12 16Z"
                                  fill="currentColor"
                                />
                              </svg>
                              <span className="mx-1">Sign Out</span>
                            </a>
                          </div>
                        )}
                      </div>
                    </>
                  ) : (
                    <>
                      <BtnPrimary link={"/auth/login"} text={"Login"} />
                    </>
                  )}

                  {/* <h3 className="mx-2 text-gray-100  lg:hidden">
                    Khatab wedaa
                  </h3> */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* </Container> */}
    </div>
  );
};

export default Navbar;
