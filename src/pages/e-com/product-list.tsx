import { FilterAlt } from "@mui/icons-material";
import { Box, Button, MenuItem, TextField, Tooltip } from "@mui/material";
import { Card, Container, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const ProductList = () => {
  const { query = "" } = useParams();

  return (
    <Container maxWidth="xl">
      <Box mt={3} />

      {/* Sidebar */}

      <Typography mb={2}>Showing result for "{query}"</Typography>

      <Box display={"flex"} justifyContent={"space-between"} mb={2}>
        <Tooltip title="filter">
          <FilterAlt />
        </Tooltip>

        <Box>
          <TextField size="small" select value={"new"} label="Sort" fullWidth>
            <MenuItem value="new">New Arrivals</MenuItem>
            <MenuItem value="popularity">Popularity</MenuItem>
            <MenuItem value="ltoh">Price (Lowest to highest)</MenuItem>
            <MenuItem value="htol">Price (Highest to loewst)</MenuItem>
          </TextField>
        </Box>
      </Box>

      {/* Product List */}
      <Grid container spacing={2}>
        {ProductListData.map((item) => (
          <Grid key={item.id} item xs={6} md={4} lg={3}>
            <Card elevation={5} sx={{ p: 2 }}>
              <Box textAlign={"center"}>
                <Box
                  sx={{
                    "&:hover": {
                      scale: 1.4,
                    },
                  }}
                  component={"img"}
                  src={item.image}
                  height={185}
                />
              </Box>

              <Typography fontWeight={600} fontSize={18}>
                {item.title}
              </Typography>
              <Typography variant="body2">
                {item.desctiption.slice(0, 100)}
                {"..."}
              </Typography>
              <Box
                mt={2}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography>₹ {item.price}</Typography>
                <Box>
                  <Button size="small" variant="outlined">
                    Add to Cart
                  </Button>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
        {ProductListData.map((item) => (
          <Grid key={item.id} item xs={6} md={4} lg={3}>
            <Card elevation={5} sx={{ p: 2 }}>
              <Box textAlign={"center"}>
                <Box
                  sx={{
                    "&:hover": {
                      scale: 1.4,
                    },
                  }}
                  component={"img"}
                  src={item.image}
                  height={185}
                />
              </Box>

              <Typography fontWeight={600} fontSize={18}>
                {item.title}
              </Typography>
              <Typography variant="body2">
                {item.desctiption.slice(0, 100)}
                {"..."}
              </Typography>
              <Box
                mt={2}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography>₹ {item.price}</Typography>
                <Box>
                  <Button size="small" variant="outlined">
                    Add to Cart
                  </Button>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
        {ProductListData.map((item) => (
          <Grid key={item.id} item xs={6} md={4} lg={3}>
            <Card elevation={5} sx={{ p: 2 }}>
              <Box textAlign={"center"}>
                <Box
                  sx={{
                    "&:hover": {
                      scale: 1.4,
                    },
                  }}
                  component={"img"}
                  src={item.image}
                  height={185}
                />
              </Box>

              <Typography fontWeight={600} fontSize={18}>
                {item.title}
              </Typography>
              <Typography variant="body2">
                {item.desctiption.slice(0, 100)}
                {"..."}
              </Typography>
              <Box
                mt={2}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography>₹ {item.price}</Typography>
                <Box>
                  <Button size="small" variant="outlined">
                    Add to Cart
                  </Button>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
        {ProductListData.map((item) => (
          <Grid key={item.id} item xs={6} md={4} lg={3}>
            <Card elevation={5} sx={{ p: 2 }}>
              <Box textAlign={"center"}>
                <Box
                  sx={{
                    "&:hover": {
                      scale: 1.4,
                    },
                  }}
                  component={"img"}
                  src={item.image}
                  height={185}
                />
              </Box>

              <Typography fontWeight={600} fontSize={18}>
                {item.title}
              </Typography>
              <Typography variant="body2">
                {item.desctiption.slice(0, 100)}
                {"..."}
              </Typography>
              <Box
                mt={2}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography>₹ {item.price}</Typography>
                <Box>
                  <Button size="small" variant="outlined">
                    Add to Cart
                  </Button>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
        {ProductListData.map((item) => (
          <Grid key={item.id} item xs={6} md={4} lg={3}>
            <Card elevation={5} sx={{ p: 2 }}>
              <Box textAlign={"center"}>
                <Box
                  sx={{
                    "&:hover": {
                      scale: 1.4,
                    },
                  }}
                  component={"img"}
                  src={item.image}
                  height={185}
                />
              </Box>

              <Typography fontWeight={600} fontSize={18}>
                {item.title}
              </Typography>
              <Typography variant="body2">
                {item.desctiption.slice(0, 100)}
                {"..."}
              </Typography>
              <Box
                mt={2}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography>₹ {item.price}</Typography>
                <Box>
                  <Button size="small" variant="outlined">
                    Add to Cart
                  </Button>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
        {ProductListData.map((item) => (
          <Grid key={item.id} item xs={6} md={4} lg={3}>
            <Card elevation={5} sx={{ p: 2 }}>
              <Box textAlign={"center"}>
                <Box
                  sx={{
                    "&:hover": {
                      scale: 1.4,
                    },
                  }}
                  component={"img"}
                  src={item.image}
                  height={185}
                />
              </Box>

              <Typography fontWeight={600} fontSize={18}>
                {item.title}
              </Typography>
              <Typography variant="body2">
                {item.desctiption.slice(0, 100)}
                {"..."}
              </Typography>
              <Box
                mt={2}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography>₹ {item.price}</Typography>
                <Box>
                  <Button size="small" variant="outlined">
                    Add to Cart
                  </Button>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList;

const ProductListData = [
  {
    id: 1,
    title: "Silver Chain",
    desctiption:
      "e nemo reprehenderit quasi molestias maiores itaque soluta aliquid quia eos mollitia corporis saepe temporibus natus placeat at et.",
    image:
      "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwaa425919/images/hi-res/510433SDAAGA00_1.jpg",
    price: "5679.38",
  },
  {
    id: 2,
    title: "Diamond ring",
    desctiption:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus porro culpa, recusanda lorem ipsum",
    image:
      "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw9026948d/images/hi-res/500067SWAABA12_1.jpg",
    price: "37647.78",
  },
  {
    id: 3,
    title: "Gold coin",
    desctiption:
      "e nemo reprehenderit quasi molestias maiores itaque soluta aliquid quia eos mollitia corporis saepe temporibus natus placeat at et.",
    image:
      "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwb971e1c6/images/hi-res/502213SHUAAA09_1.jpg",
    price: "338830.38",
  },
  {
    id: 4,
    title: "Gold ring",
    desctiption:
      "e nemo reprehenderit quasi molestias maiores itaque soluta aliquid quia eos mollitia corporis saepe temporibus natus placeat at et.",
    image:
      "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw37fc6943/images/hi-res/501718SFNAAA09_1.jpg",
    price: "674755.94",
  },
];
