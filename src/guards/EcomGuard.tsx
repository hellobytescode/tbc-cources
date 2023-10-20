import { ReactNode } from "react";
import { useAuth } from "../hooks";
import { Navigate } from "react-router-dom";
import { PATH_PAGE } from "../routes/path";

type EcomGuardProp = {
  children: ReactNode;
};

const EcomGuard = ({ children }: EcomGuardProp) => {
  const { isAuthenticated } = useAuth();

  console.log("auth", isAuthenticated);

  //TODO: ecom guard

  return <>{children}</>;
};

export default EcomGuard;
