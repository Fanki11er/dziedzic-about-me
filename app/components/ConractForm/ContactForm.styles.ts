"use client";
import { Form } from "formik";
import styled from "styled-components";

type ButtonProps = {
  $isDisabled: boolean;
};

export const FormWrapper = styled.div`
  min-width: 350px;
  width: 75%;
  height: 720px;

  @media screen and (max-width: 960px) {
    width: 85%;
  }

  @media screen and (max-width: 768px) {
    width: 95%;
  }

  @media screen and (max-width: 560px) {
    width: 100%;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Button = styled.button<ButtonProps>`
  position: relative;
  width: 200px;
  height: 60px;
  display: flex;
  background-color: transparent;
  border: none;
  margin-top: 50px;
  outline: none;
  user-select: none;
  border-radius: 16px;
  &:hover,
  &:focus {
    .buttonText {
      transition: fill 0.5s;
      fill: ${({ theme }) => theme.colors.turquoise};
    }
  }

  cursor: ${({ $isDisabled }) => ($isDisabled ? "wait" : "pointer")};

  @media screen and (max-width: 560px) {
    width: 150px;
    height: 50px;
  }
`;

export const SendError = styled.div`
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.fontSizes.XS};
  font-weight: bold;
  display: flex;
  margin-top: 20px;
  user-select: none;
  transition: color 1s 1.5s;
  animation-name: show;
  animation-duration: 1s;
  animation-delay: 1.5s;
  animation-fill-mode: forwards;
  opacity: 0;

  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
