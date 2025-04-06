"use client";
import styled from "styled-components";

export const SingleProjectWrapper = styled.article`
  position: relative;
  width: 80%;
  max-width: 1350px;
  min-width: 320px;
  min-height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: 85px;
  padding: 40px 30px 30px 0;
  margin: 50px 0;

  @media screen and (max-width: 960px) {
    min-height: 700px;
    padding: 40px 15px;
  }

  @media screen and (max-width: 560px) {
    min-height: 800px;
    width: 100%;
    border-radius: 60px;
  }
`;

export const Header = styled.h2`
  color: ${({ theme }) => theme.colors.projects};
  font-size: ${({ theme }) => theme.fontSizes.XL};
  margin: 0 0 30px 0;
  text-align: center;

  @media screen and (max-width: 960px) {
  }
`;

export const Description = styled.div`
  color: ${({ theme }) => theme.colors.projects};
  text-indent: 40px;
  font-size: ${({ theme }) => theme.fontSizes.S};
`;

export const Screenshot = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 30%;
  height: 45%;
  bottom: 0;
  margin: auto 30px 130px 20px;
  transition: transform 0.8s;
  :hover {
    transform: scale(1.8) translateX(-150px);
  }

  @media screen and (max-width: 960px) {
    height: 30%;
    left: 0;
    margin: 0 auto;
    min-width: 250px;
    bottom: 130px;

    :hover {
      transform: scale(1.8) translateY(-40px);
    }
  }

  @media screen and (max-width: 560px) {
    bottom: 170px;
    height: 25%;

    :hover {
      transform: scale(1.4) translateY(-20px);
    }
  }
`;

export const LinksWrapper = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const OutsideLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 50px;
  margin: 0 55px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.dark};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.turquoise};
  :visited {
    color: ${({ theme }) => theme.colors.turquoise};
  }

  span {
    margin-right: 3px;
    transition: color 0.5s;
  }

  &:hover span {
    color: ${({ theme }) => theme.colors.orange};
  }

  @media screen and (max-width: 960px) {
    margin: 0 30px;
  }

  @media screen and (max-width: 560px) {
    margin: 0 15px;
  }
`;

export const CredentialsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const CredentialRow = styled.div`
  text-indent: 0px;
  width: 100%;
  span {
    margin-right: 3px;
    font-weight: bold;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80%;
  padding-left: 55px;

  @media screen and (max-width: 960px) {
    padding: 0 45px;
  }

  @media screen and (max-width: 560px) {
    padding: 0 15px;
  }
`;

export const Content = styled.div`
  width: 50%;
  height: 100%;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
