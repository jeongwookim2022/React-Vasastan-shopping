import BestProduct from "../components/bestProduct/BestProduct";
import Footer from "../components/footer/Footer";
import HeaderNav from "../components/header/Header";
import LatestProduct from "../components/latestProduct/LatestProduct";
import PerfumeAccessoryTab from "../components/perfumeAccessoryTab/perfumeAccessoryTab";
import Slides from "../components/slider/SliderCompo";

function MainPage() {
  return (
    <>
      <Slides />
      <PerfumeAccessoryTab />
      <BestProduct />
      <LatestProduct />
    </>
  );
}
export default MainPage;
