import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import LandingPage from "./Pages/LandingPage";
import Footer from "./Components/Footer";
import Checkout from "./Pages/Checkout";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>

        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}
