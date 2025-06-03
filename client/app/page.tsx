import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/navigation/Navbar";
import HeroSection from "@/components/landing/sections/HeroSection";
import PricingTabs from "@/components/landing/sections/PricingTabs";
import { homestyles } from "@/constants/styles/home";

export default function Home() {
  return (
    <>
      <div className={homestyles.pageMinSize}>
        <Navbar />
        <main>
          <HeroSection />
          <PricingTabs />
        </main>
        <Footer />
      </div>
    </>
  );
}
