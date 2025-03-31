import styled from "styled-components";

export const Wrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 80%;

  @media screen and (min-width: 1600px) {
    width: 70%;
  }

  @media screen and (max-width: 960px) {
    padding: 0 25px;
    justify-content: space-around;
  }
  @media screen and (max-width: 768px) {
    padding: 0 15px;
  }

  @media screen and (max-width: 560px) {
    &.hide {
      display: none;
      pointer-events: none;
      visibility: hidden;
      transform: scale(0);
      z-index: -10;
    }

    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 120px 0 100px 0;
    transform: scale(0);
  }
`;
