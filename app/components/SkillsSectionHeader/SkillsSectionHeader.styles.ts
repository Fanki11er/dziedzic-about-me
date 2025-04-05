"use client";
import Image from "next/image";
import styled from "styled-components";

export const SkillsSectionHeaderWrapper = styled.h2`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 92%;
  max-width: 1460px;
  margin: 150px auto 80px auto;
  height: 110px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: 50px;
  color: ${({ theme }) => theme.colors.darkerBlue};
  font-family: "Montserrat";

  @media screen and (max-width: 960px) {
    margin: 120px auto 70px auto;
  }

  @media screen and (max-width: 568px) {
    width: 100%;
    flex-direction: column;
    height: 180px;
    margin: 110px auto 40px auto;
  }
`;

export const SkillsSectionHeaderText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.L};
  width: 80%;
  padding: 0 8% 0 8%;
  span {
    color: ${({ theme }) => theme.colors.orange};
    margin: 0 10px;
    width: 70%;
    height: 100%;
    @media screen and (max-width: 568px) {
      margin: 2px 0;
      height: 35px;
      text-align: center;
    }
  }

  @media screen and (max-width: 1280px) {
    padding: 0 5% 0 8%;
  }

  @media screen and (max-width: 1024px) {
    padding: 0 10% 0 20%;
  }

  @media screen and (max-width: 960px) {
    font-size: ${({ theme }) => theme.fontSizes.M};
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    padding: 0 5% 0 20%;
  }
  @media screen and (max-width: 568px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 70%;
    padding: 0 20px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 20%;
  height: 100%;
  @media screen and (max-width: 768px) {
    width: 10%;
  }
  @media screen and (max-width: 568px) {
    width: 100%;
    height: 30%;
  }
`;

export const ToolsImage = styled(Image)`
  width: 180px;
  height: 180px;
  position: absolute;
  top: -35px;
  left: 30%;
  @media screen and (max-width: 768px) {
    width: 130px;
    height: 130px;
    top: -10%;
  }
  @media screen and (max-width: 568px) {
    width: 110px;
    height: 110px;
    top: -65px;
    left: calc(50% - 55px);
  }
`;
