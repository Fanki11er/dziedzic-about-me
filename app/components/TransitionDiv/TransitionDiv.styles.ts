"use client";
import styled from "styled-components";

type Props = {
  $color: string;
};

export const TransitionDiv = styled.div<Props>`
  position: fixed;
  top: 0;
  left: -120%;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: ${({ $color }) => $color};
  z-index: 10;
`;
