import styled from "styled-components";
import { Icon } from "../Icon/Icon.styles";

export const ListElement = styled.li`
  display: flex;
  min-width: 110px;
  height: 100%;
  align-items: center;

  a {
    width: 100%;
    display: flex;
    transition: filter 0.5s, box-shadow 0.5s;
    border: 2px solid ${({ theme }) => theme.colors.menuBlue};
    border-radius: 45px;
    height: 35px;
    transition: color 0.5s, border 0.2s, box-shadow 0.5s;
    outline: none;

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.veryLightBlue};
      border: 2px solid ${({ theme }) => theme.colors.veryLightBlue};
      box-shadow: 0 0 4px 1px ${({ theme }) => theme.colors.veryLightBlue};
      border: 2px solid transparent;
      ${Icon} {
        fill: ${({ theme }) => theme.colors.veryLightBlue};
      }
    }
  }
  .isActive {
    color: ${({ theme }) => theme.colors.veryLightBlue};
    border: 2px solid ${({ theme }) => theme.colors.veryLightBlue};
    pointer-events: none;
    cursor: initial;
    ${Icon} {
      fill: ${({ theme }) => theme.colors.veryLightBlue};
    }
  }

  @media screen and (min-width: 1600px) {
    transform: scale(1.3);
  }

  @media screen and (max-width: 960px) {
    transform: scale(0.8);
  }

  @media screen and (max-width: 768px) {
    transform: scale(0.7);
    margin-left: -25px;
  }

  @media screen and (max-width: 560px) {
    max-width: 200px;
    transform: scale(1.2);
  }
`;

export const MenuLabel = styled.span`
  display: flex;
  width: 30px;
  height: 100%;
  text-align: center;
  align-items: center;
`;
