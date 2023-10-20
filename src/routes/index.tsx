import { Navigate, useLocation, useRoutes } from "react-router-dom";
import LogoOnlyLayout from "../layouts/LogoOnlyLayout";
import GuestGuard from "../guards/GuestGuard";
import Page404 from "../pages/Page404";
import AuthGuard from "../guards/AuthGuard";
import MainLayout from "../layouts/MainLayout";
import { ElementType, Suspense, lazy } from "react";
import { useAuth } from "../hooks";
import { Box } from "@mui/material";

const Loadable = (Component: ElementType) => (props: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isAuthenticated } = useAuth();

  return (
    <Suspense fallback={<Box>Loading...</Box>}>
      <Component {...props} />
    </Suspense>
  );
};

const Router = () => {
  return useRoutes([
    {
      path: "e-com",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "products/:query",
          element: <ProductList />,
        },
        {
          path: "product/:productId",
          element: <ProductDetail />,
        },
      ],
    },

    {
      path: "",
      element: (
        <AuthGuard>
          <MainLayout />
        </AuthGuard>
      ),
      children: [
        { path: "/", element: <App /> },
        { path: "user/account", element: <Account /> },
      ],
    },

    {
      path: "auth",
      element: (
        <GuestGuard>
          <LogoOnlyLayout />
        </GuestGuard>
      ),
      children: [
        { path: "login", element: <Login /> },
        { path: "verify-otp/:mobile", element: <VerifyOtp /> },
      ],
    },
    {
      path: "*",
      element: <LogoOnlyLayout />,
      children: [
        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
  ]);
};
export default Router;

// AUTHENTICATION
const Login = Loadable(lazy(() => import("../pages/Auth/login")));
const VerifyOtp = Loadable(lazy(() => import("../pages/Auth/otp")));

const App = Loadable(lazy(() => import("../pages/app")));
const Account = Loadable(lazy(() => import("../pages/account")));
const Home = Loadable(lazy(() => import("../pages/home")));

//ECOM
const ProductDetail = Loadable(
  lazy(() => import("../pages/e-com/product-detail"))
);
const ProductList = Loadable(lazy(() => import("../pages/e-com/product-list")));
const Cart = Loadable(lazy(() => import("../pages/e-com/product-cart")));
