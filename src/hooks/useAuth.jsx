import { use } from "react";
import { AuthContext } from "../providers/authentication/AuthContext";

const useAuth = () => {
  const authInfo = use(AuthContext);
  return authInfo;
};

export default useAuth;
