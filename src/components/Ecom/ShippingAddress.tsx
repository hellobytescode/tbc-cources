import {
  Box,
  Checkbox,
  Radio,
  TextField,
  Typography,
  Divider,
} from "@mui/material";

const ShippingAddress = () => {
  return (
    <div>
      <Box mt={3}>
        <Divider sx={{ borderStyle: "dashed", my: 2 }} />
        <Box my={3}>
          <Box display={"flex"}>
            <Box flex={0.2}>
              <Radio checked />
            </Box>
            <Divider orientation="vertical" />
            <Box flex={0.8}>
              <Box>
                <Typography>Ashutosh Maurya</Typography>
                <Typography>
                  M11 , Gole Market , Mahanagar- Lucknow 226016
                </Typography>
              </Box>
            </Box>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Box display={"flex"}>
            <Box flex={0.2}>
              <Radio />
            </Box>
            <Divider orientation="vertical" />
            <Box flex={0.8}>
              <Box>
                <Typography>Himanshu</Typography>
                <Typography>
                  M11 , Gole Market , Mahanagar- Lucknow 226016
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ borderStyle: "dashed", my: 2 }} />

        <Box display={"flex"} alignItems={"center"}>
          <Checkbox disableRipple />
          <Typography component={"span"} color={"text.secondary"}>
            My shipping and Biling address are the same
          </Typography>
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={1} mt={1}>
          <Typography variant="h4">Shipping Detail</Typography>
          <TextField fullWidth label="Flat/House no." />
          <TextField fullWidth label="Address" />
          <Box display={"flex"} gap={1}>
            <TextField fullWidth label="City" />
            <TextField fullWidth label="State" />
          </Box>
          <Box display={"flex"} gap={1}>
            <TextField fullWidth label="Postal Code" />
            <TextField fullWidth label="Famous Landmark " />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default ShippingAddress;
