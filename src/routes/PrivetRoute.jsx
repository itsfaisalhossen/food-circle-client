import { Navigate, useLocation } from "react-router";
import LoadingSpinner from "../components/LoadingSpinner";
import useAuth from "../hooks/useAuth";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useAuth();
  console.log(user);

  const location = useLocation();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location?.pathname} to={"/auth/login"} />;
};
export default PrivetRoute;
