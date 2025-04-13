"use client";
import styled from "styled-components";

type Props = {
  $color: string;
  $isBlocked: boolean;
};

export const MobileNavigationWrapper = styled.nav<Props>`
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  clip-path: circle(100px at 90% -10%);
  background-color: ${({ $color }) => $color};
  min-width: 350px;
  z-index: 8;
  transition: background-color 0.5s;
  display: none;

  @media screen and (max-width: 560px) {
    display: flex;
    ${({ $isBlocked }) => $isBlocked && `pointer-events: none`}
  }
`;
