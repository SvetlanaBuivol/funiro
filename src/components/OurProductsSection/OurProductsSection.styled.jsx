import styled from "styled-components";

export const Section = styled.section`
  padding-bottom: 44px;
`;

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

export const MoreButton = styled.button`
  display: block;
  width: 150px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 8px;
  border: 1px solid #e89f71;
  color: #e89f71;
  font-family: "Gilroy-SemiBold";

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  @media screen and (min-width: 768px) {
    width: 245px;
    padding: 12px;
    margin-top: 32px;
  }
`;
