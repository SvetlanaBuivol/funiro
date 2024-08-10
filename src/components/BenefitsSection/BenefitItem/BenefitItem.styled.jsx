import styled from "styled-components";
import color from '../../../css/variables'

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 24px;
  }

img {
    width: 40px;
    height: 40px;
}
`;

export const Title = styled.h3`
    font-family: 'Gilroy-SemiBold';
    font-size: 18px;

`
