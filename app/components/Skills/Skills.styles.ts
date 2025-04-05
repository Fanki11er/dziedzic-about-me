"use client";
import styled from "styled-components";

export const SkillsContainer = styled.section`
  display: flex;
  margin: 0;
  flex-flow: wrap row;
  justify-content: space-around;
  width: 100%;
  min-height: 150px;
  padding: 20px 40px 0 40px;
  min-width: ${({ theme }) => theme.minScreen};

  @media screen and (max-width: 1280px) {
    padding: 50px 40px 0 40px;
  }

  @media screen and (max-width: 560px) {
    padding: 20px 10px 0 10px;
  }
`;
