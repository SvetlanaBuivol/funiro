import styled from "styled-components";
import { color } from "../../css/variables";
import Slider from "react-slick";

export const HeroSection = styled.section`
  /* position: relative; */
  background: linear-gradient(
    to right,
    ${color.mediumLightOrange} 67%,
    ${color.lightOrange} 33%
  );
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 245px;

  @media screen and (min-width: 768px) {
    height: 383px;
  }

  @media screen and (min-width: 1440px) {
    height: 623px;
  }
`;

export const StyledSlider = styled(Slider)`
  top: 57px;
  max-width: 100%;


  .prev {
    display: none !important;
  }

  .next {
    display: none !important;
  }

  .slick-slider {
    bottom: 0;
    display: flex;
    min-width: 200px;
  }

  .slick-slide {
    padding: 0 8px;
    box-sizing: border-box;
    /* width: 300px; */
  }

  .slick-track {
    display: flex;
  }

  .slick-dots {
    top: -57px;
    display: flex;
    height: fit-content;

    li {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      margin: 0;
      @media screen and (min-width: 768px) {
        width: 27px;
        height: 27px;
        margin: 0 5px;
      }

      &.slick-active {
        border: 1px solid #e89f71;

        button {
          &::before {
            color: #e89f71;
          }
        }
      }

      button {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;

        &::before {
          font-size: 10px;
          line-height: 21px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: ${color.lightGreyText};
        }
        @media screen and (min-width: 768px) {
          &::before {
            font-size: 14px;
            line-height: 23px;
          }
        }
      }
    }

    @media screen and (min-width: 768px) {
      top: -87px;
    }
  }

  @media screen and (min-width: 768px) {
    top: 87px;

    .slick-slide {
    padding: 0 16px;
    box-sizing: border-box;
  }
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
  }
`;

export const PrevButton = styled.button`
  position: absolute;
  right: 59px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #e89f715d;

  @media screen and (min-width: 768px) {
    width: 48px;
    height: 48px;
    right: 100px;
  }

  @media screen and (min-width: 1440px) {
    right: 156px;
  }
`;

export const NextButton = styled.button`
  position: absolute;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #e89f715d;

  svg {
    transform: rotate(180deg);
  }

  @media screen and (min-width: 768px) {
    width: 48px;
    height: 48px;
    right: 45px;
  }

  @media screen and (min-width: 1440px) {
    right: 100px;
  }
`;

export const StyledContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: 375px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;

  @media screen and (max-width: 375px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 45px;
    padding-right: 45px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 100px;
    padding-right: 100px;
    width: 1440px;
  }
`;
