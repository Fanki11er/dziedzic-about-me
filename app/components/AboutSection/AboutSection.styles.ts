"use client";
import Image from "next/image";
import styled from "styled-components";

export const AboutWrapper = styled.section`
  width: 80%;
  max-width: 1500px;
  min-height: 300px;
  margin: 100px auto 65px auto;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: 85px;
  padding: 40px;

  @media screen and (min-width: 1600px) {
    min-height: 500px;
    padding: 80px;
  }

  @media screen and (max-width: 560px) {
    width: 100%;
    border-radius: 50px;
  }
`;

export const PortraitImg = styled(Image)`
  shape-outside: margin-box circle(50%);
  width: 200px;
  height: 200px;
  float: left;
  margin-right: 50px;

  @media screen and (min-width: 1600px) {
    width: 250px;
    height: 250px;
    margin-right: 80px;
  }

  @media screen and (max-width: 768px) {
    shape-outside: none;
    display: flex;
    float: initial;
    margin: 0 auto 30px auto;
  }
`;

export const AboutContent = styled.p`
  font-family: "Montserrat";
  font-size: ${({ theme }) => theme.fontSizes.S};
  line-height: 26px;
  color: ${({ theme }) => theme.colors.dark};
  margin: 0 0 10px 0;
  font-weight: 400;
  &::first-letter {
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSizes.M};
  }

  @media screen and (min-width: 1600px) {
    font-size: ${({ theme }) => theme.fontSizes.L};
    line-height: 40px;
  }

  @media screen and (max-width: 768px) {
    margin: 0 0 20px 0;
  }
`;
export const AdditionalSkillsSection = styled.section`
  width: 100%;
  margin: 30px 0 55px 0;
`;
