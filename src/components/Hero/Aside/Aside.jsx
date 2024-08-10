import { Price, StyledAside, Text, Title, Wrapper } from "./Aside.styled";
import { ReactComponent as Arrow } from "../../../assets/svg/arrowRight.svg";

const Aside = () => {
  return (
    <StyledAside>
      <Title>Bohauss</Title>
      <Text>Luxury big sofa 2-seat</Text>
      <Wrapper>
        <Price>Rp 17.000.000</Price>
        <button>
          <Arrow />
        </button>
      </Wrapper>
    </StyledAside>
  );
};

export default Aside;
