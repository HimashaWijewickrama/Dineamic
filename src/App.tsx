import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import ProductDetail from "./Components/ProductDetail";
import Checkout from "./Pages/Checkout";
import Home from "./Pages/Home";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/product/:id" element={<ProductDetail />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
