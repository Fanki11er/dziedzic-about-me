import styled from "styled-components";

export const SvgImage = styled.svg`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 200px;
  opacity: 0;
  margin: 0 15vw 40px 0;

  @media screen and (min-width: 1600px) {
    margin: 0 12vw 80px 0;
    width: 250px;
  }
  @media screen and (max-width: 1280px) {
    margin: 0 12vw 40px 0;
    width: 180px;
  }

  @media screen and (max-width: 960px) {
    width: 150px;
    margin: 0 12vw 0 0;
  }

  @media screen and (max-width: 768px) {
    width: 120px;
    margin: 0 12vw -40px 0;
  }
  @media screen and (max-width: 560px) {
    display: none;
  }
`;
