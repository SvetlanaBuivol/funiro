import styled from "styled-components";

export const Section = styled.section`
  padding: 46px 0;

  @media screen and (min-width: 768px) {
    padding: 88px 0;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  width: fit-content;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    gap: 92px;
    flex-direction: row;
  }
`;
