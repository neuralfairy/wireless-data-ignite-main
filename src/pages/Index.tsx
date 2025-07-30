import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturesOverview from "@/components/FeaturesOverview";
import StatsSection from "@/components/StatsSection";
import PricingPreview from "@/components/PricingPreview";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturesOverview />
        <PricingPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
