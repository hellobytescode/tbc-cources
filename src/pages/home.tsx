import {
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Link,
  Typography,
  useTheme,
} from "@mui/material";
import Footer from "../layouts/Footer";
import Slider from "react-slick";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import { HeroSlider } from "../components/Sliders";
import ImagesList from "../components/ImageGallery";
import { useAuth, useResponsive } from "../hooks";
import { CardGlow } from "../components/Card";
import { ButtonGlow, GooglePlayButton } from "../components/Button";

type Product = {
  image: string;
  title: string;
  url: string;
};

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <Box
      onClick={onClick}
      style={{
        ...style,
        position: "absolute",
        color: "black",
        right: "2%",
        top: "40%",
        content: "",
      }}
      className={className}
    >
      <IconButton sx={{ bgcolor: "primary.main" }}>
        <NavigateNext />
      </IconButton>
    </Box>
  );
};

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <Box
      onClick={onClick}
      style={{
        ...style,
        position: "absolute",
        color: "primary.main",
        left: "1%",
        top: "40%",
        zIndex: 2,
      }}
      className={className}
    >
      <IconButton sx={{ bgcolor: "primary.main" }}>
        <NavigateBefore />
      </IconButton>
    </Box>
  );
};

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const Products: Product[] = [
  {
    title: "Rings",
    image:
      "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/U/G/UG00021-1Y0000_11_listfront.jpg",
    url: "",
  },
  {
    title: "Ring",
    image:
      "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR03769-YGP900_11_listfront.jpg",
    url: "",
  },
  {
    title: "NeckLess",
    image:
      "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/L/JL04315-1YP900_11_listfront.jpg",
    url: "",
  },
  {
    title: "Ear Rings",
    image:
      "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE04059-YGP900_11_listfront.jpg",
    url: "",
  },
];

const BestProducts: Product[] = [
  {
    title: "Rings",
    image:
      "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/U/G/UG00021-1Y0000_11_listfront.jpg",
    url: "",
  },
  {
    title: "Ring",
    image:
      "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR03769-YGP900_11_listfront.jpg",
    url: "",
  },
  {
    title: "NeckLess",
    image:
      "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/L/JL04315-1YP900_11_listfront.jpg",
    url: "",
  },
  {
    title: "Ear Rings",
    image:
      "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE04059-YGP900_11_listfront.jpg",
    url: "",
  },
  {
    title: "Rings",
    image:
      "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/U/G/UG00021-1Y0000_11_listfront.jpg",
    url: "",
  },
  {
    title: "Ring",
    image:
      "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR03769-YGP900_11_listfront.jpg",
    url: "",
  },
  {
    title: "NeckLess",
    image:
      "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/L/JL04315-1YP900_11_listfront.jpg",
    url: "",
  },
  {
    title: "Ear Rings",
    image:
      "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE04059-YGP900_11_listfront.jpg",
    url: "",
  },
  {
    title: "Rings",
    image:
      "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/U/G/UG00021-1Y0000_11_listfront.jpg",
    url: "",
  },
  {
    title: "Ring",
    image:
      "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR03769-YGP900_11_listfront.jpg",
    url: "",
  },
  {
    title: "NeckLess",
    image:
      "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/L/JL04315-1YP900_11_listfront.jpg",
    url: "",
  },
  {
    title: "Ear Rings",
    image:
      "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE04059-YGP900_11_listfront.jpg",
    url: "",
  },
];

const images = [
  {
    id: 1,
    image:
      "https://www.caratlane.com/media/static/images/V4/2023/CL/09_NOV/AppBanner/Offer/01/Desktop_1920x694.webp",
  },
  {
    id: 2,
    image:
      "https://cdn.caratlane.com/media/static/images/V4/2023/CL/09_NOV/AppBanner/Justin/04/Desktop_1920x694_1.jpg",
  },
  {
    id: 3,
    image:
      "https://cdn.caratlane.com/media/static/images/V4/2023/CL/09_NOV/AppBanner/Blog/01/Desktop_1920x694.webp",
  },
];

const TopProduct = ({ product }: { product: Product }) => {
  const { title, url, image } = product;
  return (
    <Card data-aos="fade-up">
      <Box overflow={"hidden"}>
        {" "}
        <CardMedia
          sx={{
            zIndex: -1,
            borderRadius: 1,
            objectFit: "cover", // Make sure the image covers the card area
            "&:hover": {
              transform: "scale(1.2)",
              transition: "transform 1s ease-out",
            },
          }}
          src={image}
          component={"img"}
        />
      </Box>

      <Box textAlign={"center"} py={1} zIndex={3} sx={{ zIndex: 1 }}>
        <Typography>{title}</Typography>
        <Link href={url}>Shop Now</Link>
      </Box>
    </Card>
  );
};

const BestOfBks = ({ product }: { product: Product }) => {
  const { title, url, image } = product;
  return (
    <Card data-aos="fade-up" sx={{ maxWidth: 225 }}>
      <CardMedia
        sx={{ borderRadius: 1 }}
        src={image}
        component={"img"}
        height={250}
      />
      <Box textAlign={"center"} py={1}>
        <Typography>{title}</Typography>

        <Link href={url}>Shop Now</Link>
      </Box>
    </Card>
  );
};

const Home = () => {
  const theme = useTheme();
  const { user } = useAuth();

  const smUp = useResponsive("up", "md");

  return (
    <>
      <HeroSlider images={images} />

      {/* Top products */}
      <Container maxWidth="xl">
        <Grid container spacing={2} py={3}>
          <Grid item xs={12}>
            <Typography typography={"h4"} color={"primary"}>
              Top Products
            </Typography>
          </Grid>

          {Products.map((item) => (
            <Grid key={item.image} item xs={6} md={3} lg={3}>
              <TopProduct product={item} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* New Arrivals */}
      <Box bgcolor={theme.palette.grey[200]} py={3}>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12} textAlign={"center"}>
              <Typography typography={"h4"} color={"primary"}>
                New Arrivals
              </Typography>
            </Grid>

            {Products.map((item) => (
              <Grid key={item.image} item xs={6} md={3} lg={3}>
                <TopProduct product={item} />
              </Grid>
            ))}

            <Grid item xs={12} textAlign={"center"}>
              <Button
                variant="outlined"
                sx={{ fontSize: 16, px: 3, borderRadius: 0, my: 2 }}
              >
                {" "}
                View All
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* <Container maxWidth="xl">
        <Grid container spacing={2} mt={5} mb={7}>
          <Grid data-aos="fade-right" item md={6}>
            <Box position={"relative"}>
              <img src="http://localhost:3000/assets/summer2.svg" />

              <Box
                bgcolor={"#F6F3EE"}
                bottom={-30}
                left={150}
                width={325}
                height={325}
                position={"absolute"}
                textAlign={"center"}
              >
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  flexDirection={"column"}
                  height={"100%"}
                  gap={1}
                >
                  <Typography>Must See New Style </Typography>
                  <Typography>Birthday Collection</Typography>
                  <Box>
                    <Button variant="contained" sx={{ px: 3 }}>
                      Shop Now
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid data-aos="fade-left" item md={6}>
            <Box position={"relative"}>
              <img src="http://localhost:3000/assets/summer.svg" />

              <Box
                bgcolor={"#F6F3EE"}
                bottom={-30}
                left={150}
                width={325}
                height={325}
                position={"absolute"}
                textAlign={"center"}
              >
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  flexDirection={"column"}
                  height={"100%"}
                  gap={1}
                >
                  <Typography>Must See New Style </Typography>
                  <Typography>Birthday Collection</Typography>
                  <Box>
                    <Button variant="contained" sx={{ px: 3 }}>
                      Shop Now
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container> */}

      {/* new section */}

      {/* Best of BKS my gold */}
      {smUp && (
        <Box my={3} bgcolor={theme.palette.grey[200]} py={3}>
          <Box display={"flex"} justifyContent={"space-between"} mx={5}>
            <Box display={"flex"} fontWeight={500}>
              <Box borderBottom={"1px solid #9C1137"}>
                <Typography pl={4} variant="h4">
                  Best
                </Typography>
              </Box>{" "}
              &nbsp;
              <Box borderBottom={"1px solid #9C1137"}>
                <Typography variant="h4"> of</Typography>
              </Box>{" "}
              &nbsp;
              <Typography variant="h4"> BKSMyGold</Typography>
            </Box>

            <Box>
              <Button sx={{ borderRadius: 0, px: 3 }} variant="contained">
                Women
              </Button>
              <Button sx={{ borderRadius: 0, px: 4 }} variant="outlined">
                Men
              </Button>
            </Box>
          </Box>

          <Box my={3}>
            <Slider {...settings}>
              {BestProducts.map((item) => (
                <Box key={item.image}>
                  <BestOfBks product={item} />
                </Box>
              ))}
            </Slider>
          </Box>
        </Box>
      )}

      {/*Must have  */}
      {/* <Container maxWidth="xl">
        <Grid container spacing={2} my={3}>
          <Grid item xs={12} md={6} xl={6}>
            <Box height={"100%"} width={"100%"}>
              <img src="http://localhost:3000/assets/must_have.png" />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} xl={6}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              height={"100%"}
            >
              <Typography variant="caption" color={"primary.main"} mb={1}>
                SALE UP TO 30% OFF{" "}
              </Typography>

              <Typography fontSize={36} lineHeight={1} color={"text.muted"}>
                18k Gold <br />
                Bracelets
              </Typography>

              <Box mt={3} ml={3}>
                <Button sx={{ py: 1.5, px: 6 }} variant="contained">
                  {" "}
                  Shop Now
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container> */}

      {/* Image Gallery */}

      <Box sx={{ px: { xs: 1, md: 5, lg: 10 } }} my={5}>
        <ImagesList />
      </Box>

      <Footer />
    </>
  );
};
export default Home;
