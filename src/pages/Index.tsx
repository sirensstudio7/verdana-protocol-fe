import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import GreenGrowthSection from "@/components/landing/GreenGrowthSection";
import SegmentsSection from "@/components/landing/SegmentsSection";
import PricingSection from "@/components/landing/PricingSection";
import RegulationSection from "@/components/landing/RegulationSection";
import FaqSection from "@/components/landing/FaqSection";
import CtaSection from "@/components/landing/CtaSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black font-inter text-white">
      <Header />
      <HeroSection />
      <GreenGrowthSection />
      <SegmentsSection />
      <PricingSection />
      <RegulationSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
