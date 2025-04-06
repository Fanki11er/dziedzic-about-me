"use client";
import styled from "styled-components";
import TitleHeader from "../components/TitleHeader/TitleHeader.stylse";
import Image from "next/image";

export const StyledHeader = styled(TitleHeader)`
  margin-left: 50px;
  span {
    margin-left: 10px;
  }
`;

export const PersonImage = styled(Image)`
  position: absolute;
  width: 320px;
  right: 0;
  bottom: 0;
  margin: 0 8vw 35px 0;

  @media screen and (min-width: 1600px) {
    margin: 0 12vw 80px 0;
    width: 350px;
  }

  @media screen and (max-width: 1280px) {
    margin: 0 6vw 35px 0;
    width: 280px;
  }

  @media screen and (max-width: 960px) {
    width: 200px;
    margin: 0 8vw 35px 0;
  }

  @media screen and (max-width: 768px) {
    width: 150px;
    margin: 0 6vw 30px 0;
  }
  @media screen and (max-width: 560px) {
    display: none;
  }
`;
