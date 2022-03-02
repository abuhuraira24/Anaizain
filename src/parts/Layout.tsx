import Carosel from "../components/Carosel/Carosel";
import Footer from "../components/Footer/Footer";
import SmallDevice from "../components/Footer/SmallDevice";
import Header from "../components/Header/Header";
import Headercategories from "../components/Header/Headercategories";
import MediumDeviceCate from "../components/Header/MediumDeviceCate";
import TopBar from "../components/Header/TopBar";
import OfferTimer from "../components/OfferTimer.tsx/OfferTimer";
import Shopping from "../components/Shopping/Shopping";
import Slider from "../components/Slider/Slider";
import SpecialShop from "../components/specialShop/SpecialShop";
import VerifiedCompany from "../components/VarifiedCompany/Carousel";
// import VerifiedCompany from "../components/VarifiedCompany/VarfiedComoany";
import ViewShop from "../components/ViewShop/ViewShop";
import BannerPart from "./BannerPart";

const Layout = () => {
  return (
    <>
      <TopBar />
      <Header />
      <Headercategories />
      <MediumDeviceCate />
      <Slider />
      <OfferTimer />
      <BannerPart />
      <ViewShop />
      <SpecialShop />
      <Carosel />
      <Shopping />
      <VerifiedCompany />
      <Footer />

      <SmallDevice />
    </>
  );
};

export default Layout;
