import styled from "styled-components";
import { color } from "../../css/variables";

export const Box = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.h2`
  font-family: "Gilroy-Bold";
  font-size: 20px;
  color: ${color.black};
  margin-right: 24px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    margin-right: 40px;
  }
`;
