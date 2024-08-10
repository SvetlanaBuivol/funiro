import styled from "styled-components";

export const Title = styled.h2`
  font-family: "Gilroy-Bold";
  font-size: 26px;
  text-align: center;
  margin-bottom: 20px;
  color: #3a3a3a;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    margin-bottom: 32px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`;
