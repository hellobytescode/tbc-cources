import { useState } from "react";
import { Delete } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import {
  PaymentPage,
  ShippingAddress,
  DeliveryOption,
} from "../../components/Ecom";

const steps = [
  { label: "Shipping", components: <ShippingAddress /> },
  { label: "Delivery", components: <DeliveryOption /> },
  { label: "Payment", components: <PaymentPage /> },
];

function OrderSummary() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <Box mt={20}>
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6} lg={6} p={3}>
            <Typography variant="h4"> Order Summary</Typography>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              mt={5}
              alignItems={"center"}
            >
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <img
                  src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/U/G/UG00021-1Y0000_11_listfront.jpg"
                  width={90}
                />
                <Box display={"flex"} flexDirection={"column"} gap={2}>
                  <Typography variant="body1"> Pure set</Typography>
                  <Box display={"flex"} gap={1}>
                    <RemoveIcon
                      fontSize="small"
                      sx={{ bgcolor: "lightgray" }}
                    />
                    <Typography
                      variant="body1"
                      alignItems={"center"}
                      display={"flex"}
                    >
                      1
                    </Typography>
                    <AddIcon fontSize="small" sx={{ bgcolor: "lightgray" }} />
                  </Box>
                </Box>
              </Box>
              <Box>
                <Typography variant="body1">$65.00</Typography>
                <Delete />
              </Box>
            </Box>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              mt={1}
              alignItems={"center"}
            >
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <img
                  src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/U/G/UG00021-1Y0000_11_listfront.jpg"
                  width={90}
                />
                <Box display={"flex"} flexDirection={"column"} gap={2}>
                  <Typography variant="body1"> Pure set</Typography>
                  <Box display={"flex"} gap={1}>
                    <RemoveIcon
                      fontSize="small"
                      sx={{ bgcolor: "lightgray" }}
                    />
                    <Typography
                      variant="body1"
                      alignItems={"center"}
                      display={"flex"}
                    >
                      1
                    </Typography>
                    <AddIcon fontSize="small" sx={{ bgcolor: "lightgray" }} />
                  </Box>
                </Box>
              </Box>
              <Box>
                <Typography variant="body1">$65.00</Typography>
                <Delete />
              </Box>
            </Box>
            <Box mt={4}>
              <Typography>Gift Card / Discount code</Typography>
              <Box display={"flex"} gap={1}>
                <TextField fullWidth label="Apply Coupon" />
                <Button variant="outlined">Apply</Button>
              </Box>
              <Box mt={3} display={"flex"} flexDirection={"column"} gap={2}>
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Typography variant="body1">SubTotal</Typography>
                  <Typography variant="body1">$160.00</Typography>
                </Box>
                <Divider />
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Typography variant="body1">Sale tax (6.5%)</Typography>
                  <Typography variant="body1">$4.23</Typography>
                </Box>
                <Divider />
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Typography variant="body1">Shipping free</Typography>
                  <Typography variant="body1">Free</Typography>
                </Box>
                <Divider />
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Typography variant="body1">Total Due (6.5%)</Typography>
                  <Typography variant="body1">$164.23</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={6} p={3}>
            <Container>
              <Box>
                <Stepper activeStep={activeStep} alternativeLabel>
                  {steps.map((step, index) => (
                    <Step key={index}>
                      <StepLabel>{step.label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
                <Box>
                  {activeStep === steps.length ? (
                    <Box>Step content for the final step</Box>
                  ) : (
                    <Box>{steps[activeStep].components}</Box>
                  )}
                </Box>
                <Box mt={2} display={"flex"} justifyContent={"space-between"}>
                  <Button
                    variant="contained"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </Box>
              </Box>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default OrderSummary;
