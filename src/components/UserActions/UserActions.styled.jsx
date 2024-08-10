import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  margin-left: auto;

  a {
    svg {
      width: 20px;
      height: 20px;

      @media screen and (min-width: 1440px) {
        width: 24px;
        height: 24px;
      }
    }
  }

  @media screen and (min-width: 768px) {
    gap: 24px;
  }

  @media screen and (min-width: 1440px) {
    gap: 32px;
  }
`;
