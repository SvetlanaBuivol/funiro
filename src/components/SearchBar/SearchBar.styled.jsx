import styled, { css } from "styled-components";
import { color, textSize } from "../../css/variables";

export const SearchBox = styled.div`
  position: ${(props) => props.$isMobileSearch && "absolute"};
  display: flex;
  align-items: center;
  gap: 12px;
  width: ${(props) => (props.$isMobileSearch ? "320px" : "473px")};
  padding: 6px;
  background-color: ${color.white};

  @media screen and (min-width: 1440px) {
    padding: 12px;
  }

  ${(props) =>
    props.$isMobileSearch &&
    css`
      left: 50%;
      transform: translateX(-50%);
    `}

  button {
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const StyledInput = styled.input`
  font-family: "Gilroy-Regular";
  font-size: ${textSize.xs};
  width: 100%;
`;

export const SearchButton = styled.button`
  margin-left: auto;
  svg {
    width: 20px;
    height: 20px;

    @media screen and (min-width: 1440px) {
      width: 24px;
      height: 24px;
    }
  }
`;

export const CloseButton = styled.button`
  display: flex;
  width: 18px;
  height: 18px;
  align-items: center;
  justify-content: center;
  p {
    font-size: 18px;
    line-height: 1;
  }
`;
