import styled from "styled-components";

export const Item = styled.li`
  position: relative;
  transition: transform 0.3s ease;
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 285px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 16px 30px;
  background-color: #f4f5f7;
`;

export const Title = styled.h3`
  font-family: "Gilroy-SemiBold";
  font-size: 24px;
  line-height: 120%;
  color: #3a3a3a;
`;

export const Text = styled.p`
  color: #898989;
`;

export const Price = styled.p`
  font-family: "Gilroy-SemiBold";
  font-size: 20px;
  color: #3a3a3a;
`;
export const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(58, 58, 58, 0.719);
  opacity: 0;
  transition: opacity 0.3s ease;
`;

export const StyledItem = styled(Item)`
  &:hover ${CardOverlay} {
    opacity: 1;
  }
`;

export const Button = styled.button`
  width: 150px;
  height: 30px;
  background-color: #fff;
  font-weight: 600;
  color: #e89f71;

  @media screen and (min-width: 768px) {
    width: 202px;
    height: 48px;
  }
`;
