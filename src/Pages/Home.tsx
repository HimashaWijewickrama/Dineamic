import AnimatedMultiBtn from "../Components/AnimatedBtn";
import BestSeller from "../Components/BestSeller";
import Branches from "../Components/Branches";
import Counter from "../Components/Counter";
import FAQ from "../Components/FAQ";
import FeedBack from "../Components/FeedBack";
import LandingPage from "../Components/LandingPage";
import NavDownBtn from "../Components/NavDownBtn";
import OtherServices from "../Components/OtherServices";

export default function Home() {
  return (
    <>
      <LandingPage />
      <Counter />
      <BestSeller />
      <OtherServices />
      <FAQ />
      <FeedBack />
      <Branches />
      <AnimatedMultiBtn/>
      <NavDownBtn/>
    </>
  );
}
