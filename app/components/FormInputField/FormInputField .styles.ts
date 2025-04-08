"use client";
import styled from "styled-components";

export const Required = styled.sup`
  color: transparent;
  margin-left: 2px;
  transition: color 0.5s 0.2s;
`;

export const Error = styled.div`
  position: absolute;
  color: ${({ theme }) => theme.colors.red};
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.XS};
  left: 30px;
  bottom: -2px;
  font-weight: bold;
`;
