import AnimatedMultiBtn from "../Components/AnimatedMultiBtn";
import BestSeller from "../Components/BestSeller";
import Branches from "../Components/Branches";
import ContactForm from "../Components/ContactForm";
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
      <ContactForm />
      <FeedBack />
      <Branches />
      <AnimatedMultiBtn/>
      <NavDownBtn/>
    </>
  );
}
