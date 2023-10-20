import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("AuthContext must be use inside auth provider ");
  return context;
};
export default useAuth;
