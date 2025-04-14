"use client";
import styled from "styled-components";
import { HeaderWrapper } from "./components/HeaderWrapper/HeaderWrapper.styles";
import Image from "next/image";

export const StyledHeaderWrapper = styled(HeaderWrapper)`
  margin-left: 130px;
  span {
    margin: 0 10px;
  }
`;

export const NotFoundImage = styled(Image)`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 320px;
  margin: 0 10vw 100px 0;

  @media screen and (min-width: 1600px) {
    margin: 0 12vw 80px 0;
    width: 350px;
  }
  @media screen and (max-width: 1280px) {
    margin: 0 6vw 60px 0;
    width: 300px;
  }

  @media screen and (max-width: 960px) {
    width: 220px;
    margin: 0 6vw 60px 0;
  }

  @media screen and (max-width: 768px) {
    width: 180px;
    margin: 0 4vw 60px 0;
  }
  @media screen and (max-width: 560px) {
    display: none;
  }
`;

export const Placeholder = styled.div`
  width: 100%;
  height: 60vh;
`;
