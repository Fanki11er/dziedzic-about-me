"use client";
import useLocationColor from "@/app/hooks/useLocationColor";
import { NavigationWrapper } from "./Navigation.styles";
import NavigationLinksList from "../NavigationLinksList/NavigationLinksList";
import Logo from "../Logo/Logo";

const Navigation = () => {
  const color = useLocationColor();
  return (
    <NavigationWrapper $color={color}>
      <Logo />
      <NavigationLinksList hideOnMobile={true} />
    </NavigationWrapper>
  );
};

export default Navigation;
