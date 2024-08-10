import PropTypes from "prop-types";
import {
  HeroSection,
  ImageWrapper,
  NextButton,
  PrevButton,
  StyledContainer,
  StyledSlider,
  Wrapper,
} from "./Hero.styled";
import { ReactComponent as PrevArrow } from "../../assets/svg/prevArrow.svg";
import image1 from "../../assets/images/img-1.jpg";
import image2 from "../../assets/images/img-2.jpg";
import image3 from "../../assets/images/img-3.jpg";
import Article from "./Article/Article";
import Aside from "./Aside/Aside";
import { useMediaQuery } from "react-responsive";

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <PrevButton className="prev" onClick={onClick}>
      <PrevArrow />
    </PrevButton>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <NextButton className="next" onClick={onClick}>
      <PrevArrow />
    </NextButton>
  );
};

const Hero = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1439px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const getImageWidth = () => {
    if (isDesktop) return "934px";
    if (isTablet) return "530px";
    if (isMobile) return "300px";
    return "934px";
  };

  var settings = {
    centerMode: true,
    centerPadding: "0px",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <>
      <HeroSection>
        <div style={{ position: "relative" }}>
          <Wrapper>
            <StyledSlider {...settings}>
              <ImageWrapper style={{ width: getImageWidth() }}>
                <img src={image1} alt="" />
                <Aside />
              </ImageWrapper>
              <ImageWrapper style={{ width: getImageWidth() }}>
                <img src={image2} alt="" />
                <Aside />
              </ImageWrapper>
              <ImageWrapper style={{ width: getImageWidth() }}>
                <img src={image3} alt="" />
                <Aside />
              </ImageWrapper>
            </StyledSlider>
          </Wrapper>
          <StyledContainer>
            <Article />
            <CustomPrevArrow
              onClick={() => document.querySelector(".prev").click()}
            />
            <CustomNextArrow
              onClick={() => document.querySelector(".next").click()}
            />
          </StyledContainer>
        </div>
      </HeroSection>
    </>
  );
};

CustomPrevArrow.propTypes = {
  onClick: PropTypes.func,
};

CustomNextArrow.propTypes = {
  onClick: PropTypes.func,
};

export default Hero;
