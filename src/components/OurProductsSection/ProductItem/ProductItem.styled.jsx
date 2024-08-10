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

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Price = styled.p`
  font-family: "Gilroy-SemiBold";
  font-size: 14px;
  color: #3a3a3a;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const OldPrice = styled.p`
  text-decoration: line-through;
  font-family: "Gilroy-Regular";
  color: #b0b0b0;
  font-size: 12px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;
  background-color: rgba(58, 58, 58, 0.719);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
`;

export const StyledItem = styled(Item)`
  &:hover ${CardOverlay} {
    opacity: 1;
    pointer-events: all;
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

export const ActionsBox = styled.div`
  display: flex;
  width: 100%;
  padding: 0 55px;
  justify-content: space-between;
`;

export const IconWrapper = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  p {
    display: none;
    color: #fff;
  }

  @media screen and (min-width: 768px) {
    p {
      display: block;
    }
  }
`;

export const Discount = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #e97171;
  color: #fff;

  @media screen and (min-width: 768px) {
    top: 24px;
    right: 24px;
  }
`;

export const New = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #2ec1ac;
  color: #fff;

  @media screen and (min-width: 768px) {
    top: 24px;
    right: 24px;
  }
`;
