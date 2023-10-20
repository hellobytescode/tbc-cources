import { Box } from "@mui/material";
import useSettings from "../hooks/useSettings";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import LiveGoldRates from "./Header/LiveGoldRates";
import MenusHeader from "./Header/MenusHeader";

const MainLayout = () => {
  return (
    <>
      <Box position={"fixed"} top={0} width={"100%"} zIndex={100}>
        <LiveGoldRates />
        <Header />
        <MenusHeader />
      </Box>
      <Box sx={{ mb: 13 }} />
      <Outlet />
    </>
  );
};

export default MainLayout;
