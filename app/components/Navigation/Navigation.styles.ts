import styled from "styled-components";

export type Color = {
  $color?: string;
};

export const NavigationWrapper = styled.nav<Color>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100vw;
  height: 90px;

  padding: 0 clamp(1rem, 4vw, 40px);
  justify-content: space-between;
  column-gap: clamp(1rem, 4vw, 10vw);
  background-color: ${({ $color }) => $color};
  color: ${({ theme }) => theme.colors.darkerBlue};
  font-weight: 700;
  z-index: 8;
  color: ${({ theme }) => theme.colors.gray};
  transition: background-color 0.2s;

  @media screen and (min-width: 1600px) {
    height: 120px;
  }

  @media screen and (max-width: 768px) {
    height: 65px;
  }

  @media screen and (max-width: 560px) {
    height: 80px;
    transition: background-color 0.5s;
  }
`;
