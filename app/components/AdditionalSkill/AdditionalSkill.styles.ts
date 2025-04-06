"use client";
import Image from "next/image";
import styled from "styled-components";

export const AdditionalSkillWrapper = styled.article`
  width: 80%;
  min-width: 340px;
  max-width: 1500px;
  min-height: 70px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  display: flex;
  border-radius: 45px;
  margin: 5px auto 30px auto;
  align-items: center;
  padding-right: 15px;

  @media screen and (min-width: 1600px) {
    font-size: ${({ theme }) => theme.fontSizes.L};
    min-height: 90px;
    margin: 5px auto 50px auto;
  }
`;

export const PointerImage = styled(Image)`
  min-width: 35px;
  max-width: 35px;
  margin: 0 20px;

  @media screen and (min-width: 1600px) {
    width: 40px;
    max-width: 40px;
  }
`;

export const AdditionalSkillContent = styled.p`
  font-family: "Montserrat";
  font-size: ${({ theme }) => theme.fontSizes.S};

  @media screen and (min-width: 1600px) {
    font-size: ${({ theme }) => theme.fontSizes.L};
  }
`;
