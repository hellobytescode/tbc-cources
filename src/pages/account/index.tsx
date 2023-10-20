import { Box, Card, Container, Tab, Tabs, Typography } from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";

//hooks
import { useAuth, useTabs, useSettings } from "../../hooks";

//components
import {
  Address,
  OrderHistory,
  PersonalDetails,
} from "../../components/Account";

const Account = () => {
  const { themeStretch } = useSettings();
  const { currentTab, onChangeTab } = useTabs("personal_information");
  const { user } = useAuth();

  const APP_TABS = [
    {
      value: "personal_information",
      label: "Personal Information",
      component: <PersonalDetails />,
    },
    {
      value: "address_book",
      label: "Address Book",
      component: <Address />,
    },
    {
      value: "order_history",
      label: "Order History",
      component: <OrderHistory />,
    },
  ];

  return (
    <Container maxWidth={themeStretch ? false : "md"}>
      <Box sx={{ mt: { xs: 17, md: 15, lg: 15 } }} />
      <Typography> Hello , {user?.name}</Typography>

      <TabContext value={currentTab}>
        <Card sx={{ width: "fit-content", mt: 1 }}>
          <Tabs
            variant="scrollable"
            scrollButtons="auto"
            value={currentTab}
            onChange={onChangeTab}
          >
            {APP_TABS.map((tab) => (
              <Tab key={tab.value} label={tab.label} value={tab.value} />
            ))}
          </Tabs>
        </Card>

        <Box mb={5} />
        <>
          {APP_TABS.map((tab) => (
            <TabPanel sx={{ py: 2, px: 0 }} key={tab.value} value={tab.value}>
              {tab.component}
            </TabPanel>
          ))}
        </>
      </TabContext>
    </Container>
  );
};

export default Account;
