import { useState } from "react";
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Step,
  StepLabel,
  Stepper,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";

import {
  PaymentPage,
  DeliveryOption,
  EmptyCart,
  ShippingAddress,
} from "../../components/Ecom";
import { useTabs } from "../../hooks";

//--------------------------------------------------------------------------------

const steps = [
  { label: "Shipping", components: <ShippingAddress /> },
  { label: "Delivery", components: <DeliveryOption /> },
  { label: "Payment", components: <PaymentPage /> },
];

const COUPONS = [
  {
    value: "apply-coupon",
    icon: "",
    component: (
      <Box>
        <Box display={"flex"} gap={1}>
          <TextField size="small" fullWidth label="Apply Coupon" />
          <Button variant="outlined">Apply</Button>
        </Box>
        <Box mt={3} display={"flex"} flexDirection={"column"} gap={2}>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography variant="body1">SubTotal</Typography>
            <Typography variant="body1">160.00</Typography>
          </Box>
          <Divider />
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography variant="body1">GST (3.0%)</Typography>
            <Typography variant="body1">4.23</Typography>
          </Box>
          <Divider />
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography variant="body1">Shipping Charges</Typography>
            <Typography variant="body1">99</Typography>
          </Box>
          <Divider />
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography variant="body1">Total Due </Typography>
            <Typography variant="body1">164.23</Typography>
          </Box>
        </Box>
      </Box>
    ),
  },
  {
    value: "available-discounts",
    icon: "",
    component: <Box> No Coupons available</Box>,
  },
];

//---------------------------------------------------------------------------------

const ProductCart = () => {
  const { currentTab, onChangeTab } = useTabs("apply-coupon");
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <Box mt={25}>
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6} lg={6} p={3}>
            <Typography variant="h4"> Order Summary</Typography>

            {/* Cart Items */}

            <Box
              display={"flex"}
              justifyContent={"space-between"}
              mt={5}
              alignItems={"center"}
            >
              <Box display={"flex"} alignItems={"center"}>
                <img
                  src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/U/G/UG00021-1Y0000_11_listfront.jpg"
                  width={150}
                />
                <Box ml={2}>
                  <Typography variant="body1"> Gold ring</Typography>

                  <Typography color={"text.secondary"}>
                    This product this made of gold with diamond. inputProps
                    isosmeuqnn ausdfn
                  </Typography>

                  <Typography variant="body1"> Qty : 1</Typography>
                </Box>
              </Box>

              <Box textAlign={"center"}>
                <Typography variant="body1"> 4,52165.00</Typography>
                <Button size="small">Remove</Button>
              </Box>
            </Box>

            {/* Discount Section */}

            <Card sx={{ mt: 4, px: 1 }}>
              <Tabs value={currentTab} onChange={onChangeTab}>
                {COUPONS.map((tab) => (
                  <Tab
                    disableRipple
                    label={tab.value}
                    value={tab.value}
                    key={tab.value}
                  />
                ))}
              </Tabs>

              <Box sx={{ mb: 5 }} />

              {COUPONS.map((tab) => {
                const isMatched = tab.value === currentTab;
                return (
                  isMatched && (
                    <Box px={3} pb={3} key={tab.value}>
                      {tab.component}
                    </Box>
                  )
                );
              })}
            </Card>
          </Grid>

          {/* Steps to address and payment  */}
          {/* NOTE: if not loggen in then check show for login first */}

          <Grid item xs={12} md={6} lg={6} p={3} bgcolor={"#fcfcfc"}>
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
                <Box
                  mt={2}
                  display={"flex"}
                  justifyContent={activeStep === 0 ? "end" : "space-between"}
                >
                  {activeStep > 0 && (
                    <Button
                      variant="outlined"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                    >
                      Back
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    color="primary"
                    disabled={activeStep === 2}
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
};

export default ProductCart;
