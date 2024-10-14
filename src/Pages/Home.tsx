import Paper from "@mui/material/Paper";
import { PageContainer } from "@toolpad/core";
import AppTopBar from "../Components/AppTopBar";
import LandingPage from "./LandingPage";
import MenuItems from "./MenuItems";

export default function () {
  return (
    <>
      <LandingPage />
      <AppTopBar />
      <Paper sx={{ width: "100%" }}>
        <PageContainer>
          <MenuItems />
        </PageContainer>
      </Paper>
    </>
  );
}
