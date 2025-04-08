"use client";
import styled from "styled-components";

export const SvgImage = styled.svg`
  position: absolute;
  top: -100%;
  width: 100%;
  pointer-events: none;
  outline: none;

  @media screen and (max-width: 560px) {
    top: -128%;
  }
`;
