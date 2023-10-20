import { useState, ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
// hooks
import useAuth from "../hooks/useAuth";
import Login from "../pages/Auth/login";
// pages

// components

// ----------------------------------------------------------------------

type AuthGuardProps = {
  children: ReactNode;
};

export default function AuthGuard({ children }: AuthGuardProps) {
  const { isAuthenticated, isInitialized } = useAuth();

  const { pathname } = useLocation();

  const [requestedLocation, setRequestedLocation] = useState<string | null>(
    null
  );

  if (!isInitialized) {
    return <>Loading...</>;
  }

  if (!isAuthenticated) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    return <Login />;
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  return <>{children}</>;
}
