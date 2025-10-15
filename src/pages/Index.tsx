import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import ProductShowcase from "@/components/ProductShowcase";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Benefits />
      <ProductShowcase />
      <Testimonials />
      <FAQ />
      <Pricing />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
