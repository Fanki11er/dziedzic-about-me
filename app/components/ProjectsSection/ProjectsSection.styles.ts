"use client";

import Image from "next/image";
import styled from "styled-components";
import {
  OutsideLink,
  SingleProjectWrapper,
} from "../SingleProject/SingleProject.styles";

export const ProjectsWrapper = styled.section`
  width: 100%;
  min-height: 300px;
  margin: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SourceWrapper = styled(SingleProjectWrapper)`
  min-height: 300px;
  align-items: center;
  @media screen and (max-width: 960px) {
    min-height: 300px;
  }
`;

export const SourceLink = styled(OutsideLink)`
  width: 220px;
  span {
    margin: 0 3px;
  }
`;

export const SourceImage = styled(Image)`
  margin-left: 20px;
`;
