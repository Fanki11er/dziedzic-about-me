import { LogoWrapper } from "./NavigationLogo.styles";
import logoImage from "../../assets/images/Logo.svg";
import { ROUTES } from "@/app/utilities/constants";
import Image from "next/image";

const NavigationLogo = () => {
  return (
    <LogoWrapper href={ROUTES.home}>
      <Image src={logoImage} alt="Logo image" quality={100} />
    </LogoWrapper>
  );
};

export default NavigationLogo;
