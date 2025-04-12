"use client";
import styled from "styled-components";

export const ButtonIcon = styled.svg`
  position: fixed;
  right: -11px;
  top: -7px;
  display: none;
  width: 90px;
  z-index: 10;

  @media screen and (max-width: 560px) {
    display: initial;
    fill: "url(#MenuButton)";
  }
`;
