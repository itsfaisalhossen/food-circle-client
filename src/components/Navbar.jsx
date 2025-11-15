import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import {
  BatteryPlus,
  HandPlatter,
  LogOut,
  Settings2,
  UtensilsCrossed,
} from "lucide-react";

const Navbar = () => {
  const { user, signOutUserFunc, setUser, setLoading } = useAuth();
  const [isNavOpen, setIsNavOpen] = useState(false); // mobile menu
  const [isOpen, setIsOpen] = useState(false); // profile dropdown
  const dropdownRef = useRef(null);

  const handleSignout = () => {
    signOutUserFunc()
      .then(() => {
        toast.success("Signout Successful", {
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
        setUser(null);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Utility: close both nav & dropdown (useful when clicking a link)
  const closeAll = () => {
    setIsNavOpen(false);
    setIsOpen(false);
  };

  return (
    <div className="bg-black shadow md:px[70px]">
      <nav className="relative" aria-label="Main Navigation">
        <div className="px-4 md:px-12 lg:px-[120px] py-6 md:py-8 mx-auto">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex items-center justify-between">
              <Link to={"/"} className="flex items-center gap-2">
                <p className="font-semibold text-white sirin-stencil-regular flex items-center gap-2 text-lg md:text-2xl">
                  <UtensilsCrossed size={32} color="#FA360F" /> FoodCircle
                </p>
              </Link>

              {/* Mobile menu button */}
              <div className="flex gap-4 items-center lg:hidden">
                {user && (
                  <div className="w-7 h-7 overflow-hidden cursor-pointer border-2 border-red-400 rounded-full">
                    <img
                      referrerPolicy="no-referrer"
                      title={user?.displayName}
                      src={user?.photoURL}
                      className="object-cover w-full h-full"
                      alt={user?.displayName || "avatar"}
                    />
                  </div>
                )}
                <button
                  onClick={() => setIsNavOpen(!isNavOpen)}
                  type="button"
                  className="text-gray-300 cursor-pointer hover:text-gray-100 focus:outline-none"
                  aria-label={isNavOpen ? "Close menu" : "Open menu"}
                  aria-expanded={isNavOpen}
                >
                  {!isNavOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-9 h-10"
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
                      className="w-9 h-10"
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

            {/* Mobile menu / Desktop links */}
            <div
              className={`absolute inset-x-0 z-20 bg-black w-full mt-5 px-8 md:px-16 py-4 transition-all duration-300 ease-in-out bgwhite lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
                isNavOpen
                  ? "translate-x-0 opacity-100"
                  : "opacity-0 -translate-x-full"
              }`}
            >
              <div className="flex flex-col text-[15px] -mx-6 lg:flex-row lg:items-center lg:mx-2">
                <NavLink
                  to={"/"}
                  onClick={closeAll}
                  className="px-2 py-1.5 mx-2 mt-2 text-white hover:text-red-500 transition-colors duration-300 transform rounded-md lg:mt-0"
                >
                  Home
                </NavLink>

                <NavLink
                  to={"/available-foods"}
                  onClick={closeAll}
                  className="px-2 py-1.5 mx-2 mt-2 text-white hover:text-red-500 transition-colors duration-300 transform rounded-md lg:mt-0"
                >
                  Available Foods
                </NavLink>

                <NavLink
                  to={"/add-foods"}
                  onClick={closeAll}
                  className="px-2 lg:hidden max-md:flex py-1.5 mx-2 mt-2 text-white hover:text-red-500 transition-colors duration-300 transform rounded-md lg:mt-0"
                >
                  Add Foods
                </NavLink>

                <NavLink
                  to={"/my-foods-request"}
                  onClick={closeAll}
                  className="px-2 lg:hidden max-md:flex py-1.5 mx-2 mt-2 text-white hover:text-red-500 transition-colors duration-300 transform rounded-md lg:mt-0"
                >
                  My Foods Request
                </NavLink>

                <NavLink
                  to={"/manage-my-foods"}
                  onClick={closeAll}
                  className="px-2 lg:hidden max-md:flex py-1.5 mx-2 mt-2 text-white hover:text-red-500 transition-colors duration-300 transform rounded-md lg:mt-0"
                >
                  Manage My Foods
                </NavLink>
                {user && (
                  <div
                    onClick={() => {
                      setIsOpen(false);
                      setIsNavOpen(false);
                      handleSignout();
                    }}
                    className="px-2 lg:hidden flex py-1.5 mx-2 mt-2 text-white hover:text-red-500 transition-colors duration-300 transform rounded-md lg:mt-0"
                    role="button"
                  >
                    <LogOut size={18} />
                    <span className="mx-1">Sign Out</span>
                  </div>
                )}
              </div>

              <div className="flex items-center mt-4 lg:mt-0">
                <div
                  className="flex items-center focus:outline-none"
                  aria-label="Profile actions"
                >
                  {user ? (
                    <div ref={dropdownRef} className="relative inline-block">
                      {/* Dropdown toggle button (hidden on small screens since avatar already shown) */}
                      <div
                        onClick={() => {
                          setIsOpen((p) => !p);
                        }}
                        className="w-8 hidden lg:flex h-8 overflow-hidden cursor-pointer border-2 border-red-400 rounded-full"
                        role="button"
                        tabIndex={0}
                        aria-haspopup="true"
                        aria-expanded={isOpen}
                        title={user?.displayName}
                      >
                        <img
                          referrerPolicy="no-referrer"
                          src={user?.photoURL}
                          className="object-cover w-full h-full"
                          alt={user?.displayName || "avatar"}
                        />
                      </div>

                      {/* Dropdown menu */}
                      {isOpen && (
                        <div className="max-sm:hidden cursor-pointer absolute right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800 transition ease-out duration-100 transform opacity-100 scale-100">
                          <NavLink
                            to={"/add-foods"}
                            onClick={() => {
                              setIsOpen(false);
                              setIsNavOpen(false);
                            }}
                            className="flex hover:bg-gray-100 items-center px-3 py-3 text-sm text-gray-800 hover:text-red-500 transition-colors duration-300 transform dark:text-gray-300"
                          >
                            <BatteryPlus size={22} className="rotate-90" />
                            <span className="mx-1">Add Foods</span>
                          </NavLink>

                          <NavLink
                            to={"/my-foods-request"}
                            onClick={() => {
                              setIsOpen(false);
                              setIsNavOpen(false);
                            }}
                            className="flex hover:bg-gray-100 items-center px-3 py-3 text-sm text-gray-800 hover:text-red-500 transition-colors duration-300 transform dark:text-gray-300"
                          >
                            <HandPlatter size={20} />
                            <span className="mx-1">My Foods Request</span>
                          </NavLink>

                          <NavLink
                            to={"/manage-my-foods"}
                            onClick={() => {
                              setIsOpen(false);
                              setIsNavOpen(false);
                            }}
                            className="flex hover:bg-gray-100 items-center px-3 py-3 text-sm text-gray-800 hover:text-red-500 transition-colors duration-300 transform dark:text-gray-300"
                          >
                            <Settings2 size={20} />
                            <span className="mx-1">Manage My Foods</span>
                          </NavLink>

                          <hr className="border-gray-200 dark:border-gray-700" />

                          <div
                            onClick={() => {
                              setIsOpen(false);
                              setIsNavOpen(false);
                              handleSignout();
                            }}
                            className="flex hover:bg-gray-100 items-center p-3 text-sm text-gray-800 hover:text-red-500 transition-colors duration-300 transform dark:text-gray-300 cursor-pointer"
                            role="button"
                          >
                            <LogOut size={20} />
                            <span className="mx-1">Sign Out</span>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link to={"/auth/login"} onClick={closeAll}>
                      <button className="px-4 cursor-pointer md:px-8 py-2 md:py-2.5 text-center rounded-xl bg-gray-700 text-white hover:bg-red-500 transition-all w-full duration-300 text-[14px] md:text-[15px]">
                        Login
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
