"use client";
import styled from "styled-components";

export const SvgImage = styled.svg`
  width: 380px;
  position: absolute;
  right: 6vw;
  bottom: 50px;

  @media screen and (min-width: 1600px) {
    width: 440px;
    right: 8vw;
  }
  @media screen and (max-width: 1280px) {
    width: 300px;
    right: 3vw;
    bottom: 0;
  }

  @media screen and (max-width: 960px) {
    width: 220px;
    right: 2vw;
    bottom: -40px;
  }

  @media screen and (max-width: 768px) {
    width: 150px;
    right: 4vw;
    bottom: -80px;
  }

  @media screen and (max-width: 560px) {
    display: none;
  }
`;
