import { LogoWrapper, StyledLogoImage } from "./NavigationLogo.styles";
import logoImage from "../../assets/images/Logo.svg";
import { ROUTES } from "@/app/utilities/constants";

const NavigationLogo = () => {
  return (
    <LogoWrapper href={ROUTES.home}>
      <StyledLogoImage src={logoImage} alt="Logo image" quality={100} />
    </LogoWrapper>
  );
};

export default NavigationLogo;
