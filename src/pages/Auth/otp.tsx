import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { InputAdornment, Link, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { FormEvent, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { postApi } from "../../common/apis/main.api";
import { authApi } from "../../common/apis/auth.api";
import { useAuth, useOtpTimer, useResponsive } from "../../hooks";
import { ELocalStorageKeys } from "../../common/enums";
import { setSession } from "../../utils/jwt";
import otpImage from "../../assets/otp-image.png";
import GooglePlay from "../../assets/IOS app store.png";
import Ios from "../../assets/Google play.svg";
import Logo from "../../components/Logo";
import { StayCurrentPortrait } from "@mui/icons-material";

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

const Otp = () => {
  const { mobile = "" } = useParams();

  const { login } = useAuth();

  const [isLoading, setIsLoading] = useState(false);

  const { resetTimer, time } = useOtpTimer(60);

  const deviceName = navigator?.userAgent;

  const mdUp = useResponsive("up", "md");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const otp = data.get("otp");

    console.log(otp);

    setIsLoading(true);

    const res = await postApi({
      url: authApi.verifyOtp,
      values: {
        mobile,
        application: "customer",
        otp,
        deviceId: "yyy",
        deviceName,
        deviceModel: deviceName,
      },
    });
    setIsLoading(false);
    if (res.data) {
      if (res.data.isNewUser) {
        // send to app download page
        return;
      }
      localStorage.setItem(ELocalStorageKeys.ACCESS_TOKEN, res.data.token);
      const token = res.data.accessToken;
      setSession(token);
      login();
    }
  };

  const resendOtp = () => {
    resetTimer();
  };

  return (
    <Box>
      <Container component="main" maxWidth="xl" sx={{ my: 5 }}>
        <Grid
          container
          sx={{
            minHeight: "90vh",
            margin: "auto",
            borderRadius: "15px",
          }}
        >
          <Grid item xs={12} md={6} lg={6}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
              px={mdUp ? 10 : 5}
            >
              <Box margin={" 0 auto"}>
                <Logo />
              </Box>

              <Box color="primary" sx={{ my: 1 }}>
                <Typography fontSize={28} fontWeight={600} color="primary">
                  Verify OTP - BKS My Gold
                </Typography>
              </Box>

              <Box component="form" onSubmit={handleSubmit} noValidate>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="otp"
                  label="OTP"
                  name="otp"
                  autoComplete="otp"
                  type="number"
                  variant="standard"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        {" "}
                        <StayCurrentPortrait />
                      </InputAdornment>
                    ),
                  }}
                />
                <LoadingButton
                  type="submit"
                  fullWidth
                  loading={isLoading}
                  variant="contained"
                  sx={{ mt: 3, mb: 2, borderRadius: "15px " }}
                >
                  Login{" "}
                </LoadingButton>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12}>
                    <Box display={"flex"} gap={1} alignItems={"center"}>
                      <Typography variant="body2">
                        {"Didn't received OTP?"}{" "}
                      </Typography>
                      {time ? (
                        <Typography variant="body2" color={"primary"}>
                          {time}
                        </Typography>
                      ) : (
                        <LoadingButton onClick={resendOtp}>
                          {" "}
                          Resend
                        </LoadingButton>
                      )}
                    </Box>
                  </Grid>

                  <Grid item sm={12} md={12}>
                    <Box
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Box component={"img"} src={GooglePlay} height={45} />
                      <Box component={"img"} src={Ios} height={45} />
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
                  justifyContent: "center",
                }}
              >
                <Box>
                  <Box
                    borderRadius="15px"
                    component={"img"}
                    src={otpImage}
                    height={400}
                  />
                </Box>
              </Box>
            </Grid>
          )}
        </Grid>

        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </Box>
  );
};
export default Otp;
