"use client";
import useLocationColor from "@/app/hooks/useLocationColor";
import { NavigationWrapper } from "./Navigation.styles";
import NavigationLinksList from "../NavigationLinksList/NavigationLinksList";
import NavigationLogo from "../NavigationLogo/NavigationLogo";

const Navigation = () => {
  const color = useLocationColor();
  return (
    <NavigationWrapper $color={color}>
      <NavigationLogo />
      <NavigationLinksList hideOnMobile={true} />
    </NavigationWrapper>
  );
};

export default Navigation;
