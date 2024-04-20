import React from "react";
import NavBar from "../../components/navBar/NavBar";
import HeroSection from "../../sections/heroSection/HeroSection";
import InfoSection1 from "../../sections/infoSection1/InfoSection1";
import InfoSection2 from "../../sections/infoSection2/InfoSection2";
import FaqSection from "../../sections/faqSection/FaqSection";
import Footer from "../../components/footer/Footer";

function LandingPage() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <InfoSection1 />
      <InfoSection2 />
      <FaqSection />
      <Footer />
    </>
  );
}

export default LandingPage;
