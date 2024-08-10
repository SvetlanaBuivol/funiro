import styled from "styled-components";

export const Section = styled.section`
  padding: 46px 0;

  @media screen and (min-width: 768px) {
    padding: 88px 0;
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 92px;
  }
`;
