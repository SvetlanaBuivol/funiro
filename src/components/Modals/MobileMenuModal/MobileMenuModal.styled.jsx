import styled from "styled-components";
import { color } from "../../../css/variables";

export const Backdrop = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const MenuContant = styled.div`
  position: absolute;
  right: 0;
  top: 100px;
  width: 200px;
  height: 200px;
  background-color: ${color.white};
`;
