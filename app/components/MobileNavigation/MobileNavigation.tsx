"use client";
import { forwardRef, PropsWithChildren } from "react";
import { MobileNavigationWrapper } from "./MobileNavigation.styles";
import useLocationColor from "@/app/hooks/useLocationColor";

type Props = PropsWithChildren & {
  handleClick: () => void;
  isAnimationInProgress: boolean;
};

const MobileNavigation = forwardRef<HTMLElement, Props>(
  ({ children, handleClick, isAnimationInProgress }, ref) => {
    const color = useLocationColor();

    return (
      <MobileNavigationWrapper
        $color={color}
        $isBlocked={isAnimationInProgress}
        ref={ref}
        onClick={handleClick}
      >
        {children}
      </MobileNavigationWrapper>
    );
  }
);
MobileNavigation.displayName = "MobileNavigation";

export default MobileNavigation;
