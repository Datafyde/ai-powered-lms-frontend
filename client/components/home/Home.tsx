import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import HeroSection from "./sections/HeroSection";
import BestSpotSection from "./sections/BestSpotSection";
import LearningProgress from "./sections/LearningProgress";
import CreateWithAiSection from "./sections/CreateWithAiSection";
import AdminExperience from "./sections/AdminExperience";
import AddTeam from "./sections/AddTeam";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Header />
      <HeroSection />
      <BestSpotSection />
      <LearningProgress />
      <CreateWithAiSection />
      <AdminExperience />
      <AddTeam />
      <Footer />
    </>
  );
};

export default Home;
