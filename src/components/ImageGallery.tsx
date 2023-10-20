import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Box, Typography } from "@mui/material";

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const ImageGallery = () => {
  return (
    <>
      <Box textAlign={"center"}>
        <Typography variant="h4" color={"primary"}>
          Image Gallery
        </Typography>
        <Typography color={"text.secondary"}>
          Phasellus lorem malesuada ligula pulvinar commodo maecenas
        </Typography>
      </Box>
      <ImageList variant="quilted" cols={4} rowHeight={121}>
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
};

const itemData = [
  {
    img: "http://localhost:3000/assets/side-0.png",
    title: "Breakfast",
    rows: 4,
    cols: 1,
  },
  {
    img: "http://localhost:3000/assets/side-1.png",
    title: "Burger",
    rows: 2,
    cols: 2,
  },
  {
    img: "http://localhost:3000/assets/side-4.png",
    title: "Camera",
    rows: 4,
    cols: 1,
  },
  {
    img: "http://localhost:3000/assets/side-2.png",
    title: "Camera",
    rows: 2,
    cols: 1,
  },
  {
    img: "http://localhost:3000/assets/side-3.png",
    title: "Coffee",
    rows: 2,
    cols: 1,
  },
];

export default ImageGallery;
