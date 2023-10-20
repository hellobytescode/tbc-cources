import { Box, Button, Card, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const AppleStoreButton = () => {
  return (
    <Card
      component={RouterLink}
      to={"https://www.apple.com/in/app-store/"}
      target="_blank"
      sx={{
        boxShadow: 0,
        display: "flex",
        alignItems: "center",
        bgcolor: "primary.main",
        gap: 1,
        color: "common.white",
        width: "fit-content",
        paddingY: 0.5,
        paddingX: 1.5,
        cursor: "pointer",
        borderRadius: "5px !important",
        textDecoration: "none",
      }}
    >
      <Box>
        <Box
          component={"img"}
          height={20}
          sx={{
            animation: "pulse 2s infinite",
            "@keyframes pulse": {
              "0%": {
                transform: "scale(1)",
              },
              "50%": {
                transform: "scale(3)",
              },
              "100%": {
                transform: "scale(1)",
              },
            },
          }}
          src="https://cdn-icons-png.flaticon.com/512/831/831378.png"
          alt="play image"
        />
      </Box>

      <Box sx={{ zIndex: 2 }} letterSpacing={1} lineHeight={"1px"}>
        <Typography variant="caption" fontSize={10}>
          GET IT ON
        </Typography>
        <Typography variant="subtitle1" fontSize={12}>
          App Store
        </Typography>
      </Box>
    </Card>
  );
};
export default AppleStoreButton;
