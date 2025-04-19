import Link from "next/link";
import styled from "styled-components";

export const LogoWrapper = styled(Link)`
  height: 75%;
  min-width: 70px;
  align-self: center;
  justify-content: flex-start;
  transition: transform 0.5s;

  @media screen and (max-width: 960px) {
    height: 65%;
  }

  @media screen and (max-width: 768px) {
    height: 55%;
  }

  &:hover {
    transform: scale(1.08);
  }
`;
