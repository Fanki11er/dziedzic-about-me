"use client";

import Image from "next/image";
import styled from "styled-components";

export const CookiesInfoDialog = styled.dialog`
  overflow: visible;
  position: fixed;
  width: 80%;
  margin-bottom: 30px;
  max-width: 800px;
  min-height: 220px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  justify-self: center;
  align-self: flex-end;
  align-content: center;
  border-radius: 75px;
  border: 2px solid ${({ theme }) => theme.colors.gray};
  z-index: 100;
  padding: 55px;
  opacity: 0;
  animation-name: show;
  animation-duration: 1.5s;
  animation-delay: 1s;
  animation-fill-mode: forwards;

  &::backdrop {
    background-color: ${({ theme }) => theme.colors.transparentGray};
    opacity: 0;
    animation-name: show;
    animation-duration: 1.5s;
    animation-delay: 1s;
    animation-fill-mode: forwards;
  }

  @keyframes show {
    to {
      opacity: 1;
    }
  }

  @media screen and (max-width: 560px) {
    max-width: 90%;
    padding: 35px 35px 15px 35px;
    border-radius: 45px;
  }
`;

export const CookiesInfoContent = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  height: 100%;
  width: 100%;
  justify-content: space-evenly;
`;

export const CookieTextWrapper = styled.section`
  position: relative;
  width: 100%;
  font-weight: bold;
`;

export const CookiesParagraph = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.colors.darkerBlue};
  margin: 5px 0;
  line-height: 20px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-self: flex-end;
  margin-top: 50px;

  @media screen and (max-width: 768px) {
    justify-content: space-around;
  }

  @media screen and (max-width: 560px) {
    margin-top: 20px;
  }
`;

export const Button = styled.button`
  width: 120px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.turquoise};
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  margin: 0 60px;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    margin: 0;
  }

  @media screen and (max-width: 560px) {
    margin: 10px;
  }

  :hover {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

export const CookieImage = styled(Image)`
  width: 150px;
  position: absolute;
  top: 0;
  right: -200px;
  margin: 30px 30px 0 0;

  @media screen and (max-width: 768px) {
    left: 50px;
    top: -150px;
    width: 110px;
  }
`;
