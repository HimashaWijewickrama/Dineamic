import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import ProductDetail from "./Components/ProductDetail";
import { CartProvider } from "./Contexts/CartProvider";
import { ProductProvider } from "./Contexts/ProductProvider";
import Checkout from "./Pages/Checkout";
import Home from "./Pages/Home";
import AppTopBar from "./Components/AppTopBar";
import Header from "./Pages/Header";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <ProductProvider>
            <AppTopBar />
            <Header />
            <Routes>
              <Route path="/home" element={<Home />}></Route>
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
