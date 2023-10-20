import { Box } from "@mui/material";
import empryCart from "../../assets/empty-cart.png";

const EmptyCart = () => {
  return (
    <Box>
      <img src={empryCart} />
    </Box>
  );
};

export default EmptyCart;
