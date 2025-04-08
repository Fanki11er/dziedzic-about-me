"use client";
import { styled } from "styled-components";
import TitleHeader from "../components/TitleHeader/TitleHeader.styles";

export const Header = styled(TitleHeader)`
  margin-bottom: 55px;
  span {
    margin-left: 10px;
    margin-right: 0;
  }
`;

export const ContactFormSection = styled.section`
  width: 100%;
  padding: 65px ${({ theme }) => theme.mainPadding};
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 40px 50px;
  }

  @media screen and (max-width: 560px) {
    padding: 30px;
  }
`;
