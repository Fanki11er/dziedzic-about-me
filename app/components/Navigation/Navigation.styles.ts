import styled from "styled-components";

export type Color = {
  color?: string;
};

export const NavigationWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.mainPadding};
  height: 90px;
  width: 100%;
  background-color: ${(props: Color) => props.color};
  font-size: ${({ theme }) => theme.fontSizes.XS};
  color: ${({ theme }) => theme.colors.darkerBlue};
  font-weight: 700;
  z-index: 8;
  color: ${({ theme }) => theme.colors.gray};
  transition: background-color 0.2s;

  @media screen and (min-width: 1600px) {
    height: 120px;
  }

  @media screen and (max-width: 960px) {
    padding: 0 calc(${({ theme }) => theme.mainPadding} - 50px);
  }

  @media screen and (max-width: 768px) {
    padding: 0 15px;
    min-width: ${({ theme }) => theme.minScreen};
    height: 65px;
  }
  @media screen and (max-width: 560px) {
    padding: 0 15px;
    height: 80px;
    transition: background-color 0.5s;
  }
`;
