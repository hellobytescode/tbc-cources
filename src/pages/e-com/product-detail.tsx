import { Box, Card, Container, Grid } from "@mui/material";

const ProductDetail = () => {
  return (
    <Container maxWidth="xl">
      <Box my={10}></Box>
      <Grid container spacing={3}>
        <Grid item xs={6} md={4} lg={3}>
          <Card>item 1 </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetail;

const ProductData = [
  {
    id: 1,
    title: "",
    description: "",
    image: "",
    url: "",
  },
];
