"use client";
import styled from "styled-components";

export const Wrapper = styled.ul`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  justify-self: flex-end;

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
