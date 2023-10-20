import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";

//hooks
import { useAuth } from "../../hooks";

const PersonalDetails = () => {
  const { user } = useAuth();

  return (
    <div>
      <Card sx={{ maxWidth: "sm", boxShadow: 0, border: 1 }}>
        <CardHeader
          title="Personal Details"
          px={1}
          action={
            <Button variant="contained" size="small">
              Edit Details
            </Button>
          }
        />

        <Divider sx={{ mb: 1 }} />

        <CardContent>
          <Box display={"flex"} gap={5}>
            <Box display={"flex"} flexDirection={"column"} gap={1}>
              <Typography>Name</Typography>
              <Typography>Date of birth</Typography>
              <Typography>Phone number</Typography>
              <Typography>Email address</Typography>
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={1}>
              <Typography>:</Typography>
              <Typography>:</Typography>
              <Typography>:</Typography>
              <Typography>:</Typography>
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={1}>
              <Typography>{user?.name} </Typography>
              <Typography>
                {user?.dob ? user?.dob.slice(0, 10) : "-"}
              </Typography>
              <Typography>{user?.mobile}</Typography>
              <Typography>{user?.email}</Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default PersonalDetails;
