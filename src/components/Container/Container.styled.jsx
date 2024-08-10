import styled from "styled-components";

export const Box = styled.div`
position: relative;
    width: 375px;
    padding-left: 20px;
    padding-right: 20px;
    margin: 0 auto;

     @media screen and (max-width: 375px) {
    width: 100%;
  }

    @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 45px;
    padding-right: 45px;
  }

   @media screen and (min-width: 1440px) {
    padding-left: 100px;
    padding-right: 100px;
    width: 1440px;
  }
`