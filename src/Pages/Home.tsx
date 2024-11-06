import ContactForm from "../Components/ContactForm";
import FAQ from "../Components/FAQ";
import FeedBack from "../Components/FeedBack";
import LandingPage from "../Components/LandingPage";
import OtherServices from "../Components/OtherServices";
import Service from "../Components/Service";
import Branches from "../Components/Branches";
import BestSeller from "../Components/BestSeller";
import FeatureImg from "../Components/FeatureImg";
import Counter from "../Components/Counter";
import AnimatedMultiBtn from "../Components/AnimatedMultiBtn";

export default function Home() {
  return (
    <>
      <LandingPage />
      <Counter />
      <OtherServices />
      <FAQ />
      <ContactForm />
      <FeedBack />
      <BestSeller />
      <Branches />
      <AnimatedMultiBtn/>
    </>
  );
}
