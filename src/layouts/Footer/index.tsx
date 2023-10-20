import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import useSettings from "../../hooks/useSettings";
import Logo from "../../components/Logo";
import { AppleStoreButton, GooglePlayButton } from "../../components/Button";

const Footer = () => {
  const { themeMode } = useSettings();

  return (
    <Box bgcolor={"primary.lighter"} py={3}>
      <Container maxWidth="xl">
        <Box display={"flex"} gap={2}>
          <Grid container spacing={2}>
            <Grid item md={2} xl={2}>
              <Box mb={1}>
                <Logo />
              </Box>
              <Box mb={1}>
                <GooglePlayButton />
              </Box>

              <AppleStoreButton />
            </Grid>
            <Grid item md={2} xl={2}>
              <Typography variant="h6">About</Typography>
              <Typography color={"text.secondary"}>Our Story</Typography>
              <Typography color={"text.secondary"}>Press</Typography>
              <Typography color={"text.secondary"}>Blogs</Typography>
            </Grid>
            <Grid item md={2} xl={2}>
              <Typography variant="h6">Shop Jewllery</Typography>
              <Typography color={"text.secondary"}>Gold</Typography>
              <Typography color={"text.secondary"}>Silver</Typography>
              <Typography color={"text.secondary"}>Diamond</Typography>
            </Grid>
            <Grid item md={2} xl={2}>
              <Typography variant="h6">Why BksMyGold ?</Typography>
              <Typography color={"text.secondary"}>10 days return</Typography>
              <Typography color={"text.secondary"}>Easy </Typography>
              <Typography color={"text.secondary"}>MMTC Backed </Typography>
              <Typography color={"text.secondary"}>
                Hallmark Jewllery
              </Typography>
            </Grid>
            <Grid item md={2} xl={2}>
              <Typography variant="h6">Help</Typography>
              <Typography>Returns & Exchanges</Typography>
              <Typography>Shipping</Typography>
              <Typography>FAQs</Typography>
            </Grid>

            <Grid item md={2} xl={2}>
              <Typography variant="h6">Contact Us</Typography>
              <Typography>
                M-11 Gole Market , Mahanagar ,Lucknow, 226016{" "}
              </Typography>
              <Typography>support@bksmygold.com</Typography>
              <Typography>0522 657845</Typography>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ my: 5 }} />

        <Box textAlign="center">Terms & conditions </Box>
        <Box textAlign="center">All rights reserve BKSMyGold - 2023</Box>
      </Container>
    </Box>
  );
};
export default Footer;
