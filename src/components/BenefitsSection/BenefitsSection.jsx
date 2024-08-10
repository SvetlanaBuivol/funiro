import { benefits } from "../../data";
import BenefitItem from "./BenefitItem/BenefitItem";
import Container from "../Container/Container";
import { List, Section } from "./BenefitsSection.styled";

const BenefitsSection = () => {
  return (
    <Section>
      <Container>
        <List>
          {benefits.map((item) => (
            <BenefitItem key={item.img} item={item} />
          ))}
        </List>
      </Container>
    </Section>
  );
};

export default BenefitsSection;
