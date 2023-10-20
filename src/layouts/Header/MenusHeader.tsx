import { Box, Card, Container, Divider, Grid, Typography } from "@mui/material";
import "./menuHeader.css";

const MenusHeader = () => {
  return (
    <Box sx={{ py: 1, bgcolor: "background.paper" }}>
      <Divider />
      <Container maxWidth="lg">
        <Box
          className="menu-container"
          display={"flex"}
          gap={2}
          justifyContent={"center"}
        >
          <Box className="menu-item">
            <Typography sx={{ cursor: "pointer" }}> Rings </Typography>
            <Box className="sub-menu">
              <Card sx={{ p: 5 }}>
                <Grid container spacing={2}>
                  <Grid item xs={4} md={2}>
                    <Box display={"flex"} flexDirection={"column"}>
                      <Typography variant="subtitle1">Metal</Typography>
                      <Typography color="text.secondary">Gold</Typography>
                      <Typography color="text.secondary">Diamond</Typography>
                      <Typography color="text.secondary">Silver</Typography>
                      <Typography color="text.secondary">Platinum</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={4} md={2}>
                    <Box display={"flex"} flexDirection={"column"}>
                      <Typography variant="subtitle1">Gender</Typography>
                      <Typography color="text.secondary">Male</Typography>
                      <Typography color="text.secondary">Female</Typography>
                      <Typography color="text.secondary">Girls</Typography>
                      <Typography color="text.secondary">Boys</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={4} md={2}>
                    <Box display={"flex"} flexDirection={"column"}>
                      <Typography variant="subtitle1">Occasion</Typography>
                      <Typography color="text.secondary">Party Wear</Typography>
                      <Typography color="text.secondary">
                        Casual Wear
                      </Typography>
                      <Typography color="text.secondary">Daily Wear</Typography>
                      <Typography color="text.secondary">Wedding</Typography>
                      <Typography color="text.secondary">Gifting</Typography>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    md={6}
                    sx={{ display: { xs: "none", md: "block", lg: "block" } }}
                  >
                    <img
                      src="https://image.reliancejewels.com/Jewels/media/rjimages/headerearring.jpg"
                      alt="image-"
                    />
                  </Grid>
                </Grid>
              </Card>
            </Box>
          </Box>

          <Box className="menu-item">
            <Typography sx={{ cursor: "pointer" }}> Necklace </Typography>
            <Box className="sub-menu">
              <Card sx={{ p: 5 }}>
                <Grid container spacing={2}>
                  <Grid item xs={4} md={2}>
                    <Typography variant="subtitle1">Gold</Typography>
                  </Grid>
                  <Grid item xs={4} md={2}>
                    <Typography variant="subtitle1">Silver</Typography>
                  </Grid>
                  <Grid item xs={4} md={2}>
                    <Typography variant="subtitle1">Diamond</Typography>
                  </Grid>
                  <Grid
                    item
                    md={6}
                    sx={{ display: { xs: "none", md: "block", lg: "block" } }}
                  >
                    <img
                      src="https://image.reliancejewels.com/Jewels/media/rjimages/headerbangle.jpg"
                      alt="image-"
                    />
                  </Grid>
                </Grid>
              </Card>
            </Box>
          </Box>
          <Box className="menu-item">
            <Typography sx={{ cursor: "pointer" }}> Ear rings </Typography>
            <Box className="sub-menu">
              <Card sx={{ p: 5 }}>
                <Grid container spacing={2}>
                  <Grid item xs={4} md={2}>
                    <Typography variant="subtitle1">Gold</Typography>
                  </Grid>
                  <Grid item xs={4} md={2}>
                    <Typography variant="subtitle1">Silver</Typography>
                  </Grid>
                  <Grid item xs={4} md={2}>
                    <Typography variant="subtitle1">Diamond</Typography>
                  </Grid>
                  <Grid
                    item
                    md={6}
                    sx={{ display: { xs: "none", md: "block", lg: "block" } }}
                  >
                    <img
                      src="https://image.reliancejewels.com/Jewels/media/rjimages/headerchain.jpg"
                      alt="image-"
                    />
                  </Grid>
                </Grid>
              </Card>
            </Box>
          </Box>
          <Box className="menu-item">
            <Typography sx={{ cursor: "pointer" }}> Bracelates </Typography>
            <Box className="sub-menu">
              <Card sx={{ p: 5 }}>
                <Grid container spacing={2}>
                  <Grid item xs={4} md={2}>
                    <Typography variant="subtitle1">Gold</Typography>
                  </Grid>
                  <Grid item xs={4} md={2}>
                    <Typography variant="subtitle1">Silver</Typography>
                  </Grid>
                  <Grid item xs={4} md={2}>
                    <Typography variant="subtitle1">Diamond</Typography>
                  </Grid>
                  <Grid
                    item
                    md={6}
                    sx={{ display: { xs: "none", md: "block", lg: "block" } }}
                  >
                    <img
                      src="https://image.reliancejewels.com/Jewels/media/rjimages/headerpendant.jpg"
                      alt="image-"
                    />
                  </Grid>
                </Grid>
              </Card>
            </Box>
          </Box>

          <Box className="menu-item">
            <Typography sx={{ cursor: "pointer" }}> Mangalsutra </Typography>
            <Box className="sub-menu">
              <Card sx={{ p: 5 }}>
                <Grid container spacing={2}>
                  <Grid item xs={4} md={2}>
                    <Typography variant="subtitle1">Gold</Typography>
                  </Grid>
                  <Grid item xs={4} md={2}>
                    <Typography variant="subtitle1">Silver</Typography>
                  </Grid>
                  <Grid item xs={4} md={2}>
                    <Typography variant="subtitle1">Diamond</Typography>
                  </Grid>
                  <Grid
                    item
                    md={6}
                    sx={{ display: { xs: "none", md: "block", lg: "block" } }}
                  >
                    <img
                      src="https://image.reliancejewels.com/Jewels/media/rjimages/headermangalsutra.jpg"
                      alt="image-"
                    />
                  </Grid>
                </Grid>
              </Card>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default MenusHeader;
