import { LogoWrapper } from "./Logo.styles";
import logoImage from "../../assets/images/Logo.svg";
const Logo = () => {
  return <LogoWrapper src={logoImage} alt="Logo image" quality={100} />;
};

export default Logo;
