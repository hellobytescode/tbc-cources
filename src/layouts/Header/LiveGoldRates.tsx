import { Box, Container, Typography, useTheme } from "@mui/material";

const LiveGoldRates = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        py={1}
        px={3}
        bgcolor={"common.black"}
        color={theme.palette.common.white}
      >
        <Box display={"flex"} gap={2}>
          <Typography variant="subtitle2">
            Live Buy Price :{" "}
            <Typography
              component={"span"}
              variant="subtitle2"
              color={"text.secondary"}
            >
              5300 /GRAM
            </Typography>
          </Typography>
          <Typography variant="subtitle2">
            Live Sell Price :{" "}
            <Typography
              component={"span"}
              variant="subtitle2"
              color={"text.secondary"}
            >
              5120 /GRAM
            </Typography>{" "}
          </Typography>
        </Box>

        <Box>valid for 01:05</Box>
      </Box>
    </>
  );
};

export default LiveGoldRates;
