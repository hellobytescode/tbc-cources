import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";

const OrderHistory = () => {
  return (
    <>
      <Card sx={{ maxWidth: "sm", boxShadow: 0, border: 1 }}>
        <CardHeader title="Order History" />
        <Divider sx={{ mb: 1 }} />

        <CardContent>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={2}
            mt={5}
          >
            <Typography>No Order Details Yet !</Typography>
            <Typography>Add BKSMyGold To Your Jewellery Wardrobe</Typography>
            <Button variant="contained">Continue Shopping</Button>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default OrderHistory;
