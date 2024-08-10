import img from "../../assets/images/furniture/Images.png";
import { Box, Section } from "./FurnitureSection.styled";

const FurnitureSection = () => {
  return (
    <Section>
      <Box>
        <p>Share your setup with</p>
        <h2>#FuniroFurniture</h2>
      </Box>
      <img src={img} alt="" />
    </Section>
  );
};

export default FurnitureSection;
