"use client";
import {
  FooterLogo,
  FooterWrapper,
  FooterYearSpan,
  LogoWrapper,
} from "./Footer.styles";
import logoImage from "../../assets/images/Logo.svg";
import FooterBackground from "@/app/FooterBackground/FooterBackground";

const Footer = () => {
  return (
    <FooterWrapper>
      <LogoWrapper>
        <FooterLogo src={logoImage} alt={"Footer logo"} />
        <FooterYearSpan>2025</FooterYearSpan>
      </LogoWrapper>
      <FooterBackground />
    </FooterWrapper>
  );
};

export default Footer;
