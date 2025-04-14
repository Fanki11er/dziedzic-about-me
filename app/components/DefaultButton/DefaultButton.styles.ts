import styled from "styled-components";

export const DefaultButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 260px;
  height: 65px;
  background-color: transparent;
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.turquoise};
  font-size: ${({ theme }) => theme.fontSizes.M};
  margin-left: 70px;
  transition: color 0.4s;
  margin-bottom: 25px;
  border: 2px solid ${({ theme }) => theme.colors.turquoise};
  z-index: 7;

  &:hover {
    color: ${({ theme }) => theme.colors.veryLightBlue};
    border: 2px solid ${({ theme }) => theme.colors.veryLightBlue};
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
