import styled from "styled-components";

export const BackgroundSvg = styled.svg`
  width: 100%;
  height: 230px;

  position: absolute;
  left: 0;
  bottom: 0;

  @media screen and (min-width: 1600px) {
    height: 17vw;
  }
  @media screen and (max-width: 1024px) {
    height: 17vw;
  }
  @media screen and (max-width: 568px) {
    height: 30vw;
  }

  #Rectangle_103 {
    fill: url("#FooterLg1");
  }
`;
