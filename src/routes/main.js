import BestProduct from "../components/bestProduct/BestProduct";
import HeaderNav from "../components/header/Header";
import LatestProduct from "../components/latestProduct/LatestProduct";
import PerfumeAccessoryTab from "../components/perfumeAccessoryTab/perfumeAccessoryTab";
import Slides from "../components/slider/SliderCompo";

function MainPage() {
  return (
    <>
      <HeaderNav />
      <Slides />
      <PerfumeAccessoryTab />
      <BestProduct />
      <LatestProduct />
      <div>dd</div>
      <div>dd</div>
      <div>dd</div>
      <div>dd</div>
      <div>dd</div>
    </>
  );
}
export default MainPage;
