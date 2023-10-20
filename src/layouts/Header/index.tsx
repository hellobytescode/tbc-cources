import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import { PATH_PAGE } from "../../routes/path";
import { Search, ShoppingBagOutlined } from "@mui/icons-material";
import { AccountPopover } from "../../components/Account";
import { Link as RouterLink } from "react-router-dom";
import { Badge, InputBase, useTheme } from "@mui/material";
import Logo from "../../components/Logo";

function ResponsiveAppBar() {
  const theme = useTheme();

  return (
    <AppBar position="static" sx={{ bgcolor: "#fff" }}>
      <Container maxWidth="xl" sx={{ py: 0.5 }}>
        <Toolbar disableGutters>
          <Logo />

          <Box sx={{ flexGrow: { xs: 0, md: 0.5 } }} />

          <Box
            sx={{
              flexGrow: { xs: 1, md: 0.5 },
              display: "flex",
              borderRadius: "5px !important",
              bgcolor: theme.palette.grey[300],
            }}
          >
            <>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                fullWidth
                name="search"
                placeholder="What are you looking for Today? e.g. Gold Ring "
                inputProps={{
                  "aria-label":
                    "What are you looking for Today? e.g. Gold Ring ",
                }}
              />
              <IconButton type="submit">
                <Search sx={{ cursor: "pointer" }} />
              </IconButton>
            </>
          </Box>

          <Box sx={{ flexGrow: { xs: 0, md: 0.5 } }} />

          <Box sx={{ flexGrow: 0, ml: 2 }}>
            <Box display={"flex"} alignItems={"center"} gap={2}>
              {/* <FavoriteBorderOutlined sx={{ cursor: "pointer" }} /> */}
              <Box
                component={RouterLink}
                to={PATH_PAGE.ecom.productCart}
                sx={{
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "primary.main",
                  display: "flex",
                }}
              >
                <Badge badgeContent={2} color="error">
                  <ShoppingBagOutlined
                    sx={{ fontSize: { xs: 24, md: 36, lg: 36 } }}
                  />
                </Badge>
              </Box>

              <AccountPopover />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
