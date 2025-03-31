import styled from "styled-components";

export const Icon = styled.div`
  width: 20px;
  height: 20px;
  margin: 0 5px 0 10px;
  align-self: center;
  fill: ${({ theme }) => theme.colors.menuBlue};
  transition: fill 0.5s;
`;
