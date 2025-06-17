import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import HeroSection from "./sections/HeroSection";
import BestSpotSection from "./sections/BestSpotSection";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Header />
      <HeroSection />
      <BestSpotSection />
      <Footer />
    </>
  );
};

export default Home;
