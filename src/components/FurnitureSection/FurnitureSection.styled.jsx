import styled from "styled-components";

export const Section = styled.section`
  /* position: relative; */
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;

  img {
    position: relative;
    top: -12px;
    left: 0;
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 44px;
    padding-bottom: 87px;

    img {
      top: -25px;
    }
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 4px;

  p {
    font-family: "Gilroy-SemiBold";
    font-size: 14px;
  }

  h2 {
    font-family: "Gilroy-Bold";
    font-size: 20px;
    line-height: 120%;
    color: #3a3a3a;
  }

  @media screen and (min-width: 1440px) {
    gap: 8px;

    p {
      font-family: "Gilroy-SemiBold";
      font-size: 20px;
    }

    h2 {
      font-size: 40px;
    }
  }
`;
