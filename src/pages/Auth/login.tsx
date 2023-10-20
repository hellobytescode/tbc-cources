import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {
  InputAdornment,
  Link,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { FormEvent, useState } from "react";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import { StayCurrentPortrait } from "@mui/icons-material";
import { postApi } from "../../common/apis/main.api";
import { authApi } from "../../common/apis/auth.api";
import { AppleStoreButton, GooglePlayButton } from "../../components/Button";
import Logo from "../../components/Logo";
import { useResponsive } from "../../hooks";
import loginImage from "../../assets/login-image.png";
import GooglePlay from "../../assets/Google play.svg";
import Ios from "../../assets/IOS app store.png";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Login() {
  const navigate = useNavigate();

  const theme = useTheme();

  const { pathname } = useLocation();

  const isLoginPage = pathname.includes("login");

  const [isLoading, setIsLoading] = useState(false);

  const mdUp = useResponsive("up", "md");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const mobile = data.get("mobile");
    setIsLoading(true);

    const res = await postApi({
      url: authApi.sendOtp,
      values: {
        mobile,
        isPrivacyAccepted: true,
        isWhatsappEnabled: true,
        run: true,
        application: "customer",
      },
    });
    setIsLoading(false);
    if (res.status === 200) {
      navigate(`/auth/verify-otp/${mobile}`);
    }
  };

  return (
    <Box>
      <Container component="main" maxWidth="xl" sx={{ my: 5 }}>
        <Grid
          container
          sx={{
            minHeight: "90vh",
            margin: "auto ",
            borderRadius: "15px",
          }}
        >
          <Grid item xs={12} md={6} lg={6}>
            <Box
              height={"100%"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              px={mdUp ? 10 : 5}
            >
              <Box margin={"0 auto"}>
                <Logo />
              </Box>

              <Box color="primary" sx={{ my: 3 }}>
                <Typography fontSize={36} fontWeight={600} color="primary">
                  Sign in
                </Typography>

                <Typography
                  color="primary.light"
                  sx={{ marginTop: 1 }}
                  variant="body2"
                >
                  Use your credentials to log in to your account
                </Typography>
              </Box>

              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="mobile"
                  label="Mobile Number"
                  name="mobile"
                  type="number"
                  variant="standard"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        {" "}
                        <StayCurrentPortrait />{" "}
                      </InputAdornment>
                    ),
                  }}
                />
                <LoadingButton
                  type="submit"
                  fullWidth
                  loading={isLoading}
                  variant="contained"
                  sx={{ mt: 3, mb: 2, borderRadius: "15px" }}
                >
                  Request Otp
                </LoadingButton>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12}>
                    <Link href="#" variant="body2">
                      {"Don't have an account?"}
                    </Link>
                  </Grid>

                  <Grid item xs={6}>
                    <Box component={"img"} src={GooglePlay} height={50} />
                  </Grid>
                  <Grid item xs={6}>
                    <Box display={"flex"} justifyContent={"end"}>
                      <Box component={"img"} src={Ios} height={50} />
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>

          {mdUp && (
            <Grid item xs={12} md={6} lg={6}>
              <Box
                sx={{
                  bgcolor: "primary.lighter",
                  borderRadius: "15px",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Box borderRadius="15px" component={"img"} src={loginImage} />
                </Box>
              </Box>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
}
