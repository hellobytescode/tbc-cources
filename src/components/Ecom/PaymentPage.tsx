import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

function PaymentPage() {
  return (
    <Box mt={2}>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="payOnDelivery"
        name="radio-buttons-group"
      >
        <Typography variant="h4">Payment Methods</Typography>
        <FormControlLabel
          value="payOnDelivery"
          control={<Radio />}
          label="Pay on Delivery"
          aria-label="Pay on Delivery"
        />
        <FormControlLabel
          value="creditDebit"
          control={<Radio />}
          label="Debit/Credit Card"
        />
        <FormControlLabel
          value="directBankcard"
          control={<Radio />}
          label="Direct Bank Transfer"
        />
        <FormControlLabel
          value="otherPaymentMethods"
          control={<Radio />}
          label="Other Payment Methods"
        />
      </RadioGroup>
    </Box>
  );
}

export default PaymentPage;
