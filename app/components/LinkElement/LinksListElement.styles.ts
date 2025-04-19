"use client";
import styled from "styled-components";
import { Icon } from "../Icon/Icon.styles";

export const LinksListElement = styled.li`
  display: flex;
  width: fit-content;
  min-width: 90px;
  height: 100%;
  align-items: center;

  .isActive {
    color: ${({ theme }) => theme.colors.veryLightBlue};
    border: 2px solid ${({ theme }) => theme.colors.veryLightBlue};
    pointer-events: none;
    cursor: initial;
    ${Icon} {
      fill: ${({ theme }) => theme.colors.veryLightBlue};
    }
  }

  @media screen and (max-width: 960px) {
    min-width: fit-content;
  }
`;

export const MenuLabel = styled.span`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
  align-items: center;
  font-size: clamp(0.8rem, 1.2vw, 1.3rem);

  @media screen and (max-width: 560px) {
    font-size: ${({ theme }) => theme.fontSizes.M};
  }
`;
