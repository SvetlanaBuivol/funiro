import Slider from "react-slick";
import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  background-color: #f9f1e7;
  padding: 44px 0;
`;

export const Wrapper = styled.div`
  position: relative;
  left: 50%;
  width: 100%;
  height: 255px;

  @media screen and (min-width: 768px) {
    height: 400px;
  }

  @media screen and (min-width: 1440px) {
    height: 582px;
    left: 40%;
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

export const StyledSlider = styled(Slider)`
  .slick-prev {
    display: none !important;
  }

  .next-room {
    display: none !important;
  }

  .slick-slider {
    bottom: 0;
  }

  .slick-slide {
    /* width: 200px; */
    padding: 0 12px;
    box-sizing: border-box;
  }
`;

export const NextButton = styled.button`
  position: absolute;
  top: 50%;
  bottom: 50%;
  transform: translate(-50%, -50%);
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 4px 14px 1px rgba(0, 0, 0, 0.16);

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

export const Box = styled.div`
  display: box;
  width: 170px;

  h2 {
    font-family: "Gilroy-Bold";
    font-size: 22px;
    line-height: 120%;
    margin-bottom: 4px;
    color: #3a3a3a;
  }

  p {
    font-size: 12px;
    line-height: 120%;
    color: #898989;
    margin-bottom: 14px;
  }

  button {
    padding: 6px;
    width: 100px;
    background-color: #e89f71;
    color: #fff;
    font-family: "Gilroy-SemiBold";
    font-size: 12px;
  }

  @media screen and (min-width: 768px) {
    width: 300px;

    h2 {
      font-size: 30px;
      margin-bottom: 6px;
    }

    p {
      font-size: 14px;
      margin-bottom: 18px;
      line-height: 150%;
    }

    button {
      padding: 10px;
      width: 130px;
      font-family: "Gilroy-SemiBold";
      font-size: 14px;
    }
  }

  @media screen and (min-width: 1440px) {
    width: 378px;

    h2 {
    font-size: 40px;
    margin-bottom: 8px;
  }

  p {
    margin-bottom: 24px;
  }

  button {
    padding: 12px;
    width: 176px;
  }

  }
`;

export const StyledContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: 375px;
  display: flex;
  align-items: center;
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
