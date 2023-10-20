import { Radio } from "@mui/material";
import { Box, FormControlLabel, Typography } from "@mui/material";

function DeliveryOption() {
  return (
    <Box mt={2}>
      <Typography variant="h4">Delivery Option</Typography>
      <Box display={"flex"} justifyContent={"space-between"}>
        <FormControlLabel
          label="Standard 5-7 Business Days "
          control={<Radio />}
        />
        <Typography variant="body1">Free</Typography>
      </Box>
      <Box display={"flex"} justifyContent={"space-between"}>
        <FormControlLabel label="2-4 Business Days " control={<Radio />} />
        <Typography variant="body1">Free</Typography>
      </Box>
      <Box display={"flex"} justifyContent={"space-between"}>
        <FormControlLabel label="Same   Days delevery " control={<Radio />} />
        <Typography variant="body1">Free</Typography>
      </Box>
    </Box>
  );
}

export default DeliveryOption;
