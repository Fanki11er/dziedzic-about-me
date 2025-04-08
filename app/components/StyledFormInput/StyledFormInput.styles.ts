"use client";
import styled from "styled-components";

type Props = {
  $withError: boolean;
};

export const StyledFormInput = styled.input<Props>`
  min-width: 400px;
  width: 60%;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: 45px;
  margin-bottom: 20px;
  border: 2px solid
    ${({ $withError, theme }) =>
      $withError ? theme.colors.red : "transparent"};
  color: ${({ theme }) => theme.colors.contact};
  font-size: ${({ theme }) => theme.fontSizes.M};
  font-weight: bold;
  padding: 0 25px;
  transition: color 0.5s;
  outline: none;
  transition: border 0.5s 0.2s;

  &::placeholder {
    color: ${({ theme }) => theme.colors.transparentContact};
    transition: color 0.8s;
  }

  &:focus {
    border: 2px solid
      ${({ theme, $withError }) =>
        $withError ? theme.colors.red : theme.colors.turquoise};
    &::placeholder {
      color: transparent;
    }
  }

  &:not(:placeholder-shown) + label {
    color: ${({ theme }) => theme.colors.contact};
    transform: scale(1);
    sup {
      color: ${({ theme }) => theme.colors.red};
    }
  }

  &:focus + label {
    color: ${({ theme }) => theme.colors.contact};
    transform: scale(1);
    sup {
      color: ${({ theme }) => theme.colors.red};
    }
  }

  @media screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.S};
    height: 50px;
  }

  @media screen and (max-width: 560px) {
    min-width: 320px;
    width: 100%;
  }
`;
