import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import { AppProvider } from "@toolpad/core/AppProvider";
import { useDemoRouter } from "@toolpad/core/internals";
import { PageContainer } from "@toolpad/core/PageContainer";
import AppTopBar from "./Components/AppTopBar";
import ButtonBaseDemo from "./Pages/LandingPage";
import MenuItems from "./Pages/MenuItems";
import LandingPage from "./Pages/LandingPage";

const NAVIGATION = [
  { segment: "", title: "Home" },
  { segment: "orders", title: "Orders" },
];

export default function App() {
  const router = useDemoRouter("/orders");

  const theme = useTheme();

  return (
    <>
      <LandingPage />
      <AppTopBar />
      <AppProvider navigation={NAVIGATION} router={router} theme={theme}>
        <Paper sx={{ width: "100%" }}>
          <PageContainer>
            <MenuItems />
          </PageContainer>
        </Paper>
      </AppProvider>
    </>
  );
}
