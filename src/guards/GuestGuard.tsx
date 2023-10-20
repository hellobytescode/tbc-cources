import { ReactNode } from "react";
import { useAuth } from "../hooks";
import { Navigate } from "react-router-dom";
import { PATH_PAGE } from "../routes/path";

type GuestGuardProp = {
  children: ReactNode;
};

const GuestGuard = ({ children }: GuestGuardProp) => {
  const { isAuthenticated } = useAuth();

  console.log("auth", isAuthenticated);

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return <>{children}</>;
};

export default GuestGuard;
