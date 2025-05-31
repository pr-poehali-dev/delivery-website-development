import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PopularDishes from "@/components/PopularDishes";
import HowItWorks from "@/components/HowItWorks";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <PopularDishes />
      <HowItWorks />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Index;
