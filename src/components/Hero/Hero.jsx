import { useEffect, useState } from "react";
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
  const [imageWidth, setImageWidth] = useState("934px");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1440 && window.innerWidth > 768) {
        setImageWidth("530px");
      } else if (window.innerWidth < 768) {
        setImageWidth("350px");
      } else {
        setImageWidth("934px");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        <Wrapper>
          <StyledSlider {...settings}>
            <ImageWrapper
              style={{ width: imageWidth, transform: "translateX(270px)" }}
            >
              <img src={image1} alt="" />
              <Aside />
            </ImageWrapper>
            <ImageWrapper
              style={{ width: imageWidth, transform: "translateX(270px)" }}
            >
              <img src={image2} alt="" />
              <Aside />
            </ImageWrapper>
            <ImageWrapper
              style={{ width: imageWidth, transform: "translateX(270px)" }}
            >
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
