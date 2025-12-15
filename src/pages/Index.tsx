import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import GreenGrowthSection from "@/components/landing/GreenGrowthSection";
import QuoteSection from "@/components/landing/QuoteSection";
import SolutionSection from "@/components/landing/SolutionSection";
import CoreProductSection from "@/components/landing/CoreProductSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <GreenGrowthSection />
      <QuoteSection />
      <SolutionSection />
      <CoreProductSection />
      <Footer />
    </div>
  );
};

export default Index;
