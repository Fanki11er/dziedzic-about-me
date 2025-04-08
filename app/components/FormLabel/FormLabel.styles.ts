"use client";
import styled from "styled-components";

export const FormLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.S};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.contact};
  margin: 0 0 5px 25px;
  position: absolute;
  left: 0;
  top: 0;
  color: transparent;
  transform: scale(0.7);
  transition: transform 0.5s 0.2s, color 0.5s 0.2s;
  user-select: none;
`;
