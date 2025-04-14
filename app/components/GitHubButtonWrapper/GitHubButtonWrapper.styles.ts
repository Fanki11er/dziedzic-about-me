"use client";
import styled from "styled-components";

export const GitHubButtonWrapper = styled.div`
  position: absolute;
  bottom: 8%;
  width: fit-content;

  @media screen and (max-width: 1280px) {
    bottom: -2%;
  }

  @media screen and (max-width: 768px) {
    bottom: -8%;
  }
`;
