import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppTopBar from "./Components/AppTopBar";
import Footer from "./Components/Footer";
import LandingPage from "./Components/LandingPage";
import ProductDetail from "./Components/ProductDetail";
import { CartProvider } from "./Contexts/CartProvider";
import { ProductProvider } from "./Contexts/ProductProvider";
import Checkout from "./Pages/Checkout";
import MenuItems from "./Pages/MenuItems";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <ProductProvider>
            <AppTopBar />
            <LandingPage />
            <Routes>
              <Route path="/product-list" element={<MenuItems />}></Route>
              <Route path="/checkout" element={<Checkout />}></Route>
              <Route path="/product/:id" element={<ProductDetail />}></Route>
            </Routes>
          </ProductProvider>
        </CartProvider>
      </BrowserRouter>

      <Footer />
    </>
  );
}
