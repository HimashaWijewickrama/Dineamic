import AppTopBar from "../Components/AppTopBar";
import { CartProvider } from "../Contexts/CartProvider";
import CustomBreadcrumb from "../Components/CustomBreadcrumb";
import MenuItems from "./MenuItems";

export default function Home() {
  return (
    <>
      <CartProvider>
        <AppTopBar />
        <MenuItems />
      </CartProvider>
    </>
  );
}
