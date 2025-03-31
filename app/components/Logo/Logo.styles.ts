import Image from "next/image";
import styled from "styled-components";

export const LogoWrapper = styled(Image)`
  height: 75%;
  width: auto;
  align-self: center;
  justify-content: flex-start;
  @media screen and (max-width: 960px) {
    height: 65%;
  }

  @media screen and (max-width: 768px) {
    height: 55%;
  }
`;
