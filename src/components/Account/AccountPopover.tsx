import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
// @mui
import { alpha } from "@mui/material/styles";
import {
  Box,
  Divider,
  Typography,
  Stack,
  MenuItem,
  Avatar,
} from "@mui/material";
import { useAuth } from "../../hooks";
import { PATH_AUTH, PATH_PAGE } from "../../routes/path";
import MenuPopover from "../MenuPopover";
import { IconButton } from "@mui/material";
// routes

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    label: "Home",
    linkTo: "/",
  },
  // {
  //   label: 'Profile',
  //   linkTo: PATH_DASHBOARD.user.profile,
  // },
  {
    label: "Account",
    linkTo: PATH_PAGE.account,
  },
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const [open, setOpen] = useState<HTMLElement | null>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate(PATH_AUTH.login, { replace: true });

      handleClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          fontSize: 16,
          p: 0,
          ...(open && {
            "&:before": {
              zIndex: 1,
              content: "''",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              position: "absolute",
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        <Avatar
          sx={{
            bgcolor: "primary.main",
            width: { xs: 24, md: 36, lg: 36 },
            height: { xs: 24, md: 36, lg: 36 },
          }}
          src={user?.image}
        />
      </IconButton>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        sx={{
          p: 0,
          mt: 1.5,
          ml: 0.75,
          "& .MuiMenuItem-root": {
            typography: "body2",
            borderRadius: 0.75,
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {user?.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
            {user?.email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: "dashed" }} />

        {user ? (
          <>
            <Stack sx={{ p: 1 }}>
              {MENU_OPTIONS.map((option) => (
                <MenuItem
                  key={option.label}
                  to={option.linkTo}
                  component={RouterLink}
                  onClick={handleClose}
                >
                  {option.label}
                </MenuItem>
              ))}
            </Stack>
            <Divider sx={{ borderStyle: "dashed" }} />
            <MenuItem onClick={handleLogout} sx={{ m: 1 }}>
              Logout
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem component={RouterLink} to={PATH_AUTH.login} sx={{ m: 1 }}>
              Login
            </MenuItem>
          </>
        )}
      </MenuPopover>
    </>
  );
}
