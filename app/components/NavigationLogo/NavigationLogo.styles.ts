import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.08);
  }
`;

export const StyledLogoImage = styled(Image)`
  height: 75%;
  min-width: 70px;

  @media screen and (max-width: 960px) {
    height: 65%;
  }

  @media screen and (max-width: 768px) {
    height: 55%;
  }
`;
