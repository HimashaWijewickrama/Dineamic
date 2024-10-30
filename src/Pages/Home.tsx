import AppTopBar from "../Components/AppTopBar";
import { CartProvider } from "../Components/CartProvider";
import CustomBreadcrumb from "../Components/CustomBreadcrumb";
// import LandingPage from "./LandingPage";
import MenuItems from "./MenuItems";

export default function Home() {
  return (
    <>
      {/* <LandingPage /> */}
      <CartProvider>
        <AppTopBar />
        <MenuItems />
      </CartProvider>
    </>
  );
}
