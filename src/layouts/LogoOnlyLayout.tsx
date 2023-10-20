import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";

const LogoOnlyLayout = () => {
  return (
    <>
      <Container maxWidth="xl"></Container>
      <Outlet />
    </>
  );
};

export default LogoOnlyLayout;
