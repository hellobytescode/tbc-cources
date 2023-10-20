import { styled, Card, CardProps } from "@mui/material";
import { ReactNode } from "react";

const RootStyle = styled(Card)(({ theme }) => ({
  borderRadius: 10,
  maxWidth: "90%",
  maxHeight: "100%",
  position: "relative",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",

  "&:hover": {
    transform: "scale(0.8)",
    opacity: "1",
  },
}));

// ----------------------------------------------------------------------

interface Props extends CardProps {
  children: ReactNode;
}

const GlowCard = ({ children, ...other }: Props) => {
  return <RootStyle {...other}>{children}</RootStyle>;
};

export default GlowCard;
