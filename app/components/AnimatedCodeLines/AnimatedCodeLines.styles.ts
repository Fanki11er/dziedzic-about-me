import styled from "styled-components";

export const Svg = styled.svg`
  position: absolute;
  top: 0;
  left: 50px;
  width: 100%;
  object-fit: fill;

  @media screen and (max-width: 1280px) {
    width: 80%;
  }
  @media screen and (max-width: 560px) {
    left: 25px;
  }
`;
