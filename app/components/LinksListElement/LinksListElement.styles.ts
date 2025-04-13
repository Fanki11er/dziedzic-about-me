import styled from "styled-components";
import { Icon } from "../Icon/Icon.styles";
import Link from "next/link";

export const ListElement = styled.li`
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

export const StyledLink = styled(Link)`
  width: 100%;
  display: grid;
  grid-template-columns: 0.25fr 0.75fr;
  transition: filter 0.5s, box-shadow 0.5s;
  border: 2px solid ${({ theme }) => theme.colors.menuBlue};
  border-radius: 25px;
  transition: color 0.5s, border 0.2s, box-shadow 0.5s;
  outline: none;
  padding: 0.5rem clamp(2px, 1vw, 1.5rem);

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

  @media screen and (max-width: 960px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
    justify-content: center;
    justify-items: center;
    align-items: center;
    border-radius: 15px;
    padding: 0.2rem clamp(5px, 2vw, 1.5rem);
  }

  @media screen and (max-width: 560px) {
    grid-template-columns: 0.5fr 1fr;
    grid-template-rows: 1fr;
    width: 200px;
    height: auto;
    padding-top: 8px;
    padding-bottom: 8px;
    border-radius: 20px;
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
