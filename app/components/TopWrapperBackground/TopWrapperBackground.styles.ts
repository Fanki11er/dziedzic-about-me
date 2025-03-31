import styled from "styled-components";

export const Background = styled.svg`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: -1px;
  z-index: -1;
  min-width: ${({ theme }) => theme.minScreen};
`;
