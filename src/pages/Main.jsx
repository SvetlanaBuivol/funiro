import BenefitsSection from "../components/BenefitsSection/BenefitsSection";
import FurnitureSection from "../components/FurnitureSection/FurnitureSection";
import Hero from "../components/Hero/Hero";
import InspirationsSection from "../components/InspirationsSection/InspirationsSection";
import OurProductsSection from "../components/OurProductsSection/OurProductsSection";

const Main = () => {
  return (
    <>
      <Hero />
      <BenefitsSection />
      <OurProductsSection />
      <InspirationsSection />
      <FurnitureSection/>
    </>
  );
};

export default Main;
