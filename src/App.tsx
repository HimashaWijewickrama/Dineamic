import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import LandingPage from "./Pages/LandingPage";
import Footer from "./Components/Footer";
import Checkout from "./Pages/Checkout";
import ProductDetail from "./Components/ProductDetail";
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
      <Footer/>
    </>
  );
}
