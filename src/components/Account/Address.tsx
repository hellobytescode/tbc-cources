import { Delete, Edit } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";

//hooks
import { useAuth } from "../../hooks";

const Address = () => {
  const { user } = useAuth();
  return (
    <Box mt={2}>
      <Card sx={{ maxWidth: "sm", boxShadow: 0, border: 1 }}>
        <CardHeader
          title="Your saved addresses"
          action={
            <Button variant="contained" size="small">
              Add Address
            </Button>
          }
        />

        <Divider sx={{ mb: 1 }} />

        <CardContent>
          <Box display={"flex"} gap={1}>
            <Box display={"flex"} flexDirection={"column"} gap={1}>
              <Typography variant="body2">{user?.name}</Typography>
              <Typography variant="body2">+91 1234567895</Typography>
              <Typography variant="body2" mb={2}>
                2/234 GoalMarket , Mahanager , lucknow , UTTAR PRADESH ,
                226010,India
              </Typography>
            </Box>
            <Box display={"flex"} gap={1}>
              <Box>
                <IconButton color="success">
                  <Edit />
                </IconButton>
              </Box>
              <Box>
                <IconButton color="error">
                  <Delete />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Address;
