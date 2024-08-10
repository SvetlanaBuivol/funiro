import styled from "styled-components";
import { color } from "../../css/variables";

export const HeaderSection = styled.section`
  background: linear-gradient(to right, ${color.mediumLightOrange} 67%, ${color.lightOrange} 33%);
  padding-top: 32px;
  padding-bottom: 40px;

  @media screen and (min-width: 768px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 40px;
    padding-bottom: 56px;
  }
`;

