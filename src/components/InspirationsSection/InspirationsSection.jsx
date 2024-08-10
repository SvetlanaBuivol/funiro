import {
    Box,
  ImageWrapper,
  NextButton,
  Section,
  StyledContainer,
  StyledSlider,
  Wrapper,
} from "./InspirationsSection.styled";
import img1 from "../../assets/images/inspirations/room1.jpg";
import img2 from "../../assets/images/inspirations/room2.jpg";
import img3 from "../../assets/images/inspirations/room3.jpg";
import { ReactComponent as PrevArrow } from "../../assets/svg/prevArrow.svg";
import { useMediaQuery } from "react-responsive";

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <NextButton className="next-room" onClick={onClick}>
      <PrevArrow />
    </NextButton>
  );
};

const InspirationsSection = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1439px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const getImageWidth = () => {
    if (isDesktop) return "404px";
    if (isTablet) return "300px";
    if (isMobile) return "200px";
    return "404px";
  };

  var settings = {
    centerPadding: "0px",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <Section>
      <Wrapper>
        <StyledSlider {...settings}>
          <ImageWrapper style={{ width: getImageWidth() }}>
            <img src={img1} alt="" />
          </ImageWrapper>
          <ImageWrapper style={{ width: getImageWidth() }}>
            <img src={img2} alt="" />
          </ImageWrapper>
          <ImageWrapper style={{ width: getImageWidth() }}>
            <img src={img3} alt="" />
          </ImageWrapper>
        </StyledSlider>
      </Wrapper>
      <StyledContainer>
        <Box>
          <h2>50+ Beautiful rooms inspiration</h2>
          <p>
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
                  </p>
                  <button>Explore More</button>
        </Box>
        <CustomNextArrow
          onClick={() => document.querySelector(".next-room").click()}
        />
      </StyledContainer>
    </Section>
  );
};

export default InspirationsSection;
