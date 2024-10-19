import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import LandingPage from "./Pages/LandingPage";
import Footer from "./Components/Footer";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}
