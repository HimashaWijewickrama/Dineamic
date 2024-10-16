import Paper from "@mui/material/Paper";
import AppTopBar from "../Components/AppTopBar";
import { CartProvider } from "../Components/CartProvider";
import LandingPage from "./LandingPage";
import MenuItems from "./MenuItems";

export default function () {
  return (
    <>
      <LandingPage />
      <CartProvider>
        <AppTopBar />
        <Paper sx={{ width: "100%" }}>
          <MenuItems />
        </Paper>
      </CartProvider>
    </>
  );
}
