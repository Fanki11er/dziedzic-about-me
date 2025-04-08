"use client";
import styled from "styled-components";
import { StyledFormInput } from "../StyledFormInput/StyledFormInput.styles";
import { FormInputWrapper } from "../FormInputWrapper/FormInputWrapper.styles";

export const TextAreaWrapper = styled(FormInputWrapper)`
  display: flex;
  height: 320px;
`;

export const TextArea = styled(StyledFormInput)`
  height: 80%;
  width: 100%;
  display: block;
  padding: 25px 30px;
  border-radius: 30px;
  resize: none;
`;
