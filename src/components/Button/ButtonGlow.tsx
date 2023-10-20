import React, { ReactNode } from "react";
import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const GlowingButton = styled(Button)(({ theme }) => ({
  position: "relative",
  color: theme.palette.primary.main,
  cursor: "pointer",
  border: `0.15em solid ${theme.palette.primary.main}`,
  borderRadius: "0.45em",
  background: "none",
  perspective: "2em",
  fontFamily: "Raleway, sans-serif",
  boxShadow: `inset 0px 0px 0.5em 0px ${theme.palette.primary.main},
              0px 0px 0.5em 0px ${theme.palette.primary.main}`,
  animation: "border-flicker 2s linear infinite",

  "& .glowing-txt": {
    float: "left",
    textShadow: `0 0 0.125em hsla(0, 0%, 100%, 0.3),
                0 0 0.45em ${theme.palette.primary.main}`,
    animation: "text-flicker 3s linear infinite",
  },

  "& .faulty-letter": {
    opacity: 0.5,
    animation: "faulty-flicker 2s linear infinite",
  },

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.7,
    filter: "blur(1em)",
    transform: "translateY(120%) rotateX(95deg) scale(1, 0.35)",
    background: theme.palette.primary.main,
    pointerEvents: "none",
  },

  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0,
    zIndex: -1,
    backgroundColor: theme.palette.primary.main,
    boxShadow: `0 0 2em 0.2em ${theme.palette.primary.main}`,
    transition: "opacity 100ms linear",
  },

  "&:hover": {
    color: "#fff",
    textShadow: "none",
    animation: "none",

    "& .glowing-txt": {
      animation: "none",
    },

    "& .faulty-letter": {
      animation: "none",
      textShadow: "none",
      opacity: 1,
    },

    "&:before": {
      filter: "blur(1.5em)",
      opacity: 1,
    },

    "&:after": {
      opacity: 1,
    },
  },

  "@media only screen and (max-width: 600px)": {
    fontSize: "1em",
  },
}));

interface Props extends ButtonProps {
  children: ReactNode;
}

const ButtonGlow = ({ children, ...others }: Props) => {
  return (
    <GlowingButton {...others}>
      <span className="glowing-txt">{children}</span>
    </GlowingButton>
  );
};
export default ButtonGlow;
