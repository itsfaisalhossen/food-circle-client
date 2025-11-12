import { Link, useLocation, useNavigate } from "react-router";
import Container from "../components/Container";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { UtensilsCrossed } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    user,
    setUser,
    updateProfileFunc,
    createUserWithEmailAndPasswordFunc,
    signInWithGooglePopupFunc,
    setLoading,
  } = useAuth();
  console.log(user);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;
    const displayName = e.target.name?.value;
    const photoURL = e.target.photo?.value;
    // console.log({ email, displayName, photoURL, password });

    const regEx =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])(?!.*\s).{8,}$/;

    if (!regEx.test(password)) {
      toast.error(
        "⚠️Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.",
        {
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "#713200",
          },
          iconTheme: {
            primary: "#713200",
            secondary: "#FFFAEE",
          },
        }
      );
      return;
    }

    // return;

    createUserWithEmailAndPasswordFunc(email, password)
      .then((res) => {
        const user = res.user;
        Swal.fire({
          title: "Account Create Successful",
          icon: "success",
          draggable: true,
        });
        updateProfileFunc(displayName, photoURL)
          .then(() => {
            setUser({ ...user, displayName, photoURL });
            navigate(location.state ? location.state : "/");
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setUser(user);
          });
        const newUser = {
          name: displayName,
          image: photoURL,
          email: res?.user?.email,
        };
        console.log(newUser);

        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => console.log("data after user save", data));
        setUser(res.user);
        setLoading(false);
        e.target.reset();
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  const handleGoogleSignin = () => {
    signInWithGooglePopupFunc()
      .then((res) => {
        console.log(res.user);
        setLoading(false);
        setUser(res?.user);
        const newUser = {
          name: res?.user?.displayName,
          email: res?.user?.email,
          image: res?.user.photoURL,
        };
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => console.log("data after user save", data));

        toast.success("SignIn Successful", {
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
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        toast.error(err.message);
      });
  };

  return (
    <div className="my-14 md:my-24">
      <SectionTitle title1={"Sign up to FoodCircle"} />
      <Container>
        <div className="w-full max-w-[660px] p-6 md:p-10 m-auto bg-white rounded-lg shadow-md">
          {/* Form */}
          <form onSubmit={handleRegister}>
            {/* Username */}
            <div>
              <label className="block text-sm text-gray-800 dark:text-gray-200">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="User Name"
                className="block w-full px-4 md:px-6 py-2 md:py-3 mt-2 text-gray-700 bg-white border rounded-xl dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            {/* Photo */}
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <label className="block text-sm text-gray-800 dark:text-gray-200">
                  Photo
                </label>
              </div>

              <input
                type="text"
                name="photo"
                required
                placeholder="Photo_URL"
                className="block w-full px-4 md:px-6 py-2 md:py-3 mt-2 text-gray-700 bg-white border rounded-xl dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            {/* Password */}
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <label className="block text-sm text-gray-800 dark:text-gray-200">
                  Email
                </label>
              </div>

              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="block w-full px-4 md:px-6 py-2 md:py-3 mt-2 text-gray-700 bg-white border rounded-xl dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            {/* Password */}
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <label className="block text-sm text-gray-800 dark:text-gray-200">
                  Password
                </label>
              </div>

              <input
                type="password"
                name="password"
                required
                placeholder="Your Password"
                className="block w-full px-4 md:px-6 py-2 md:py-3 mt-2 text-gray-700 bg-white border rounded-xl dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            {/* Sign In Button */}
            <div className="mt-6">
              <input
                className="px-4 w-full cursor-pointer md:px-6  py-2 md:py-3 rounded-xl bg-red-500 text-white  hover:bg-red-600 transition-all duration-300"
                type="submit"
                value="Sign In"
              />
            </div>
          </form>

          {/* Divider */}
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

            <p className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">
              Or Sign in With
            </p>

            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
          </div>

          {/* Social Login */}
          <div className="flex items-center mt-6">
            {/* Google Button */}
            <button
              onClick={handleGoogleSignin}
              type="button"
              className="px-4 flex items-center w-full text-center justify-center md:px-6 py-2 md:py-3 rounded-xl border hover:border-black border-black bg-black  text-white cursor-pointer transition-all duration-300 textxl"
            >
              <FcGoogle size={22} />
              <span className="mx-2 sm:inline">Sign in with Google</span>
            </button>
          </div>

          {/* Create Account */}
          <p className="mt-8 text-sm font-light text-center text-gray-700">
            Already have an account?{" "}
            <Link
              to={"/auth/login"}
              className="font-medium text-gray-700 dark:text-gray-200 hover:underline"
            >
              login
            </Link>
          </p>
        </div>
      </Container>
    </div>
  );
};
export default Register;
