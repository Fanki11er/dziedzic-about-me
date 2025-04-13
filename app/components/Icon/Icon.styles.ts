import styled from "styled-components";
// !! Add media ??
//!! center
export const Icon = styled.div`
  width: clamp(0.5rem, 2.5vw, 2rem);
  align-items: center;
  margin: 0 clamp(0.1rem, 0.2rem, 0.5rem);
  align-self: center;
  fill: ${({ theme }) => theme.colors.menuBlue};
  transition: fill 0.5s;

  @media screen and (max-width: 560px) {
    width: 35px;
  }
`;
