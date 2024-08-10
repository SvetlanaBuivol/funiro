import styled from "styled-components";
import { color } from "../../css/variables";

export const NavList = styled.ul`
  display: flex;
  gap: 18px;
  color: ${color.darkGreyText};
  width: fit-content;

  @media screen and (min-width: 1440px) {
    gap: 40px;
    margin-right: 43px;
  }
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
`;
