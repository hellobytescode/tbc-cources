import {
  ArrowBack,
  ArrowForward,
  NavigateBefore,
  NavigateNext,
} from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { FC } from "react";
import Slider from "react-slick";

type SliderProps = {
  images: {
    id: number | string;
    image: string;
  }[];
};

interface SliderArrowArrow {
  onClick?: () => void;
  type: "next" | "prev";
  className?: "string";
}

const SliderArrow: FC<SliderArrowArrow> = (props) => {
  const { onClick, type, className } = props;
  return (
    <IconButton
      sx={{
        backgroundColor: "primary",

        "&:hover": {
          backgroundColor: "primary.main",
          color: "primary.contrastText",
        },
        // bottom: { xs: "-70px !important", md: "-28px !important" },
        left:
          type === "prev" ? { xs: "45% !important", md: "48% !important" } : "",
        right:
          type === "prev" ? "" : { xs: "45% !important", md: "48% !important" },
        top: { xs: "85% !important", md: "95% !important" },
        zIndex: 10,
        boxShadow: 1,
      }}
      disableRipple
      onClick={onClick}
      className={className}
    >
      {type === "next" ? (
        <ArrowForward sx={{ fontSize: 22 }} />
      ) : (
        <ArrowBack sx={{ fontSize: 22 }} />
      )}
    </IconButton>
  );
};

//----------------------------------------------------------------------

const HeroSlider = ({ images }: SliderProps) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SliderArrow type="next" />,
    prevArrow: <SliderArrow type="prev" />,
  };

  return (
    <>
      <Slider {...settings}>
        {images.map((item) => (
          <Box position={"relative"} key={item.id}>
            <img src={item.image} width={"100%"} height={"100%"} />
          </Box>
        ))}{" "}
      </Slider>
    </>
  );
};

export default HeroSlider;
