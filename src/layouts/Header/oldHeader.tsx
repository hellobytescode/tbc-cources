import {
  AppBar,
  Box,
  Container,
  IconButton,
  InputBase,
  styled,
  useTheme,
} from "@mui/material";
import { Search, ShoppingBagOutlined } from "@mui/icons-material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { PATH_AUTH, PATH_PAGE } from "../../routes/path";
import { FormEvent } from "react";
import { useAuth, useResponsive } from "../../hooks";
import AccountPopover from "../../components/Account/AccountPopover";
import { HEADER, NAVBAR } from "../../utils/constants";
import cssStyles from "../../utils/cssStyles";

//----------------------------------------------------------------------------------

type RootStyleProps = {
  isCollapse: boolean;
  isOffset: boolean;
  verticalLayout: boolean;
};

const RootStyle = styled(AppBar, {
  shouldForwardProp: (prop) =>
    prop !== "isCollapse" && prop !== "isOffset" && prop !== "verticalLayout",
})<RootStyleProps>(({ isCollapse, isOffset, verticalLayout, theme }) => ({
  ...cssStyles(theme).bgBlur(),
  boxShadow: "none",
  height: HEADER.MOBILE_HEIGHT,
  zIndex: theme.zIndex.appBar + 1,
  transition: theme.transitions.create(["width", "height"], {
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up("lg")]: {
    height: HEADER.DASHBOARD_DESKTOP_HEIGHT,
    width: `calc(100% - ${NAVBAR.DASHBOARD_WIDTH + 1}px)`,
    ...(isCollapse && {
      width: `calc(100% - ${NAVBAR.DASHBOARD_COLLAPSE_WIDTH}px)`,
    }),
    ...(isOffset && {
      height: HEADER.DASHBOARD_DESKTOP_OFFSET_HEIGHT,
    }),
    ...(verticalLayout && {
      width: "100%",
      height: HEADER.DASHBOARD_DESKTOP_OFFSET_HEIGHT,
      backgroundColor: theme.palette.background.default,
    }),
  },
}));

type Props = {
  onOpenSidebar: VoidFunction;
  isCollapse?: boolean;
  verticalLayout?: boolean;
};

//-----------------------------------------------------------------------------------

const Header = () => {
  const isDesktop = useResponsive("up", "lg");

  const theme = useTheme();

  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const handleSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    let search = data.get("search");
    console.log("log : ", search);
    if (!search) return;
    navigate(PATH_PAGE.ecom.productList(String(search)));
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate(PATH_AUTH.login, { replace: true });
    } catch (error) {
      // toast error unable to logout
    }
  };

  console.log("log: user ", user);

  return (
    <Box bgcolor={"#fff"}>
      <Container maxWidth="xl">
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          py={2}
        >
          <Box component={RouterLink} to={PATH_PAGE.root}>
            LOGO
          </Box>
          <Box
            flex={0.5}
            component={"form"}
            onSubmit={handleSearch}
            py={1}
            bgcolor={theme.palette.grey[300]}
            display={"flex"}
            alignItems={"center"}
            px={1}
            sx={{ borderRadius: "10px !important" }}
          >
            <>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                fullWidth
                name="search"
                placeholder="What are you looking for Today? e.g dimond ring "
                inputProps={{
                  "aria-label":
                    "What are you looking for Today? e.g dimond ring ",
                }}
              />
              <IconButton type="submit">
                <Search sx={{ cursor: "pointer" }} />
              </IconButton>
            </>
          </Box>

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
              <ShoppingBagOutlined fontSize="large" />
            </Box>

            <AccountPopover />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default Header;
