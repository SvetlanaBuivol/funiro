import styled from "styled-components";
import { color, textSize } from "../../../css/variables";

export const StyledAside = styled.aside`
  display: none;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.719);
  z-index: 1000;

  @media screen and (min-width: 768px) {
    display: block;
    bottom: 20px;
    right: 20px;
    width: 200px;
    padding: 16px;
  }

  @media screen and (min-width: 1440px) {
    bottom: 40px;
    right: 40px;
    width: 294px;
    padding: 24px;
  }
`;

export const Title = styled.h2`
  font-family: "Gilroy-SemiBold";
  font-size: 22px;
  line-height: 120%;
  color: ${color.darkGreyText};
  margin-bottom: 4px;

  @media screen and (min-width: 1440px) {
    font-size: 28px;
  }
`;

export const Text = styled.p`
  margin-bottom: 8px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Price = styled.p`
  font-family: "Gilroy-SemiBold";
  font-size: ${textSize.s};
  color: ${color.darkGreyText};

  @media screen and (min-width: 1440px) {
    font-size: ${textSize.m};
  }
`;
