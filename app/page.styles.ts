"use client";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const TitleWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  min-width: 615px;
  height: 450px;
  padding-left: 30px;
  margin-top: 30px;

  @media screen and (min-width: 1600px) {
    height: 550px;
  }

  @media screen and (max-width: 1280px) {
    margin-top: 70px;
  }

  @media screen and (max-width: 960px) {
    height: 350px;
    min-width: 450px;
  }

  @media screen and (max-width: 768px) {
    height: 280px;
    min-width: 360px;
  }

  @media screen and (max-width: 560px) {
    min-width: 350px;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: fit-content;
  height: 135px;
  margin-top: 135px;
  padding-left: 40px;

  @media screen and (min-width: 1600px) {
    padding-left: 25%;
  }

  @media screen and (max-width: 1280px) {
    margin-top: 95px;
  }

  @media screen and (max-width: 960px) {
    margin-top: 60px;
  }

  @media screen and (max-width: 768px) {
    height: 110px;
    margin-top: 50px;
  }

  @media screen and (max-width: 560px) {
    margin-left: 30px;
    padding-left: 0px;
  }
`;

export const ProjectsButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 260px;
  height: 65px;
  background-color: ${({ theme }) => theme.colors.dark};
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.turquoise};
  font-size: ${({ theme }) => theme.fontSizes.M};
  margin-left: 70px;
  transition: color 0.4s;
  margin-bottom: 25px;
  z-index: 7;

  &:hover {
    color: ${({ theme }) => theme.colors.veryLightBlue};
    &:visited {
      color: ${({ theme }) => theme.colors.veryLightBlue};
    }
  }
  &:visited {
    color: ${({ theme }) => theme.colors.turquoise};
  }

  @media screen and (max-width: 1280px) {
    margin-bottom: 65px;
  }

  @media screen and (max-width: 960px) {
    font-size: ${({ theme }) => theme.fontSizes.S};
    width: 220px;
    height: 50px;
    margin-left: 0px;
    margin-right: 5%;
    margin-bottom: 65px;
  }

  @media screen and (max-width: 768px) {
    width: 160px;
    height: 40px;
    font-size: ${({ theme }) => theme.fontSizes.XS};
    margin-bottom: 60px;
    margin-left: 10%;
  }

  @media screen and (max-width: 568px) {
    margin-left: -10%;
  }
`;

export const HeroImage = styled(Image)`
  position: absolute;
  object-fit: contain;
  width: 60%;
  max-width: 320px;
  z-index: 2;
  right: 7%;
  bottom: 10%;

  @media screen and (max-width: 1280px) {
    width: 22vw;
  }

  @media screen and (max-width: 768px) {
    width: 20vw;
  }

  @media screen and (max-width: 560px) {
    width: 22vw;
  }
`;
