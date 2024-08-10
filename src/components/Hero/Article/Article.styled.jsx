import styled from "styled-components";
import { color, textSize } from "../../../css/variables";

export const StyledArticle = styled.article`
  position: absolute;
  top: 28px;
  left: 20px;
  width: 160px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.715);

  @media screen and (min-width: 768px) {
    width: 280px;
    padding: 40px;
    left: 45px;
    top: 0;
  }

  @media screen and (min-width: 1440px) {
    width: 494px;
    padding: 60px;
    left: 100px;
  }
`;

export const Title = styled.h1`
  font-family: "Gilroy-Bold";
  font-size: ${textSize.s};
  color: ${color.darkGreyText};
  line-height: 120%;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: ${textSize.l};
    margin-bottom: 14px;
  }

  @media screen and (min-width: 1440px) {
    font-size: ${textSize.xl};
    margin-bottom: 16px;
  }
`;

export const Text = styled.p`
  font-size: 10px;
  color: ${color.mediumLightGreyText};
  margin-bottom: 8px;
  line-height: 120%;

  @media screen and (min-width: 768px) {
    font-size: ${textSize.xs};
    margin-bottom: 10px;
  }

  @media screen and (min-width: 1440px) {
    font-size: ${textSize.m};
    margin-bottom: 48px;
    line-height: 150%;
  }
`;

export const Button = styled.button`
  width: 100%;
  background-color: ${color.orange};
  padding: 6px 0;
  color: ${color.white};
  font-family: "Gilroy-SemiBold";
  font-size: ${textSize.xs};

  @media screen and (min-width: 768px) {
    padding: 16px 0;
  }

  @media screen and (min-width: 1440px) {
    padding: 24px 0;
    font-size: ${textSize.m};
  }
`;
