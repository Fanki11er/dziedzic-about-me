"use client";
import { useCallback, useRef, useState } from "react";
import MobileMenuButton from "../MobileMenuButton/MobileMenuButton";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
import NavigationLinksList from "../NavigationLinksList/NavigationLinksList";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const AnimatedMobileNavigation = () => {
  const navigationRef = useRef<HTMLUnknownElement>(null);
  const svgButtonRef = useRef<SVGSVGElement>(null);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<
    "OPEN" | "CLOSED" | "INITIAL"
  >("INITIAL");
  const [isInProgress, setIsInProgress] = useState(false);
  gsap.registerPlugin(useGSAP);

  const handleToggleNavModal = useCallback(() => {
    switch (isMobileNavOpen) {
      case "INITIAL": {
        setIsMobileNavOpen("OPEN");
        break;
      }
      case "OPEN": {
        setIsMobileNavOpen("CLOSED");
        break;
      }
      case "CLOSED": {
        setIsMobileNavOpen("OPEN");
        break;
      }
    }
  }, [isMobileNavOpen]);

  useGSAP(() => {
    if (navigationRef.current && svgButtonRef.current) {
      const button = svgButtonRef.current;
      const navigation = navigationRef.current;
      const navigationList = navigation.querySelector("ul");
      const links = navigation.querySelectorAll("li");
      const arrow = button.querySelector("#Arrow");
      const tl = gsap.timeline();

      if (isMobileNavOpen === "OPEN") {
        tl.set(navigation, {
          clipPath: "circle(100px at 90% -10%)",
        });
        tl.set(navigationList!, {
          scale: 0,
        });
        tl.set(links, { opacity: 0, display: "none" });

        tl.set(arrow, {
          translateX: "272",
          rotate: -90,
          transformOrigin: "center",
        });

        setIsInProgress(true);
        tl.to(navigationList, { scale: 1 })
          .to(navigation, {
            clipPath: "circle(1000px at 90% -10%)",
            duration: "1",
          })
          .to(links, { display: "initial" }, "=-0.5")
          .to(
            links,
            {
              duration: 0.4,
              opacity: 1,
              stagger: {
                grid: [6, 1],
                from: "start",
                amount: 0.5,
              },
            },
            "=-0.7"
          )
          .to(button, { right: "+=9", duration: 0.5 }, "-=1")
          .to(arrow, { translateX: "-=15", duration: 0.5 }, "-=1")
          .to(arrow, { rotate: 90, duration: 0.5 }, "-=0.6")
          .to(arrow, {
            fill: "url(#MenuButton)",
            onComplete: () => {
              setIsInProgress(false);
            },
          });
      } else if (isMobileNavOpen === "CLOSED") {
        setIsInProgress(true);
        tl.to(links, { opacity: 0, duration: 0.4, stagger: { amount: 0.5 } })
          .to(links, { display: "none" }, "-=0.4")
          .to(navigationList, { scale: 0 }, "-=0.5")
          .to(navigation, {
            clipPath: "circle(100px at 90% -10%)",
            duration: 1,
          })
          .to(arrow, { rotate: -90, duration: 0.5 }, "-=0.8")
          .to(arrow, { translateX: "272", duration: 0.5 }, "-=0.5")
          .to(
            button,
            {
              right: "-=9",
              duration: 0.5,
              onComplete: () => {
                setIsInProgress(false);
              },
            },
            "-=0.5"
          );
      }
    }
  }, [isMobileNavOpen]);

  return (
    <>
      <MobileNavigation
        ref={navigationRef}
        handleClick={handleToggleNavModal}
        isAnimationInProgress={isInProgress}
      >
        <NavigationLinksList />
      </MobileNavigation>
      <MobileMenuButton
        handleClick={handleToggleNavModal}
        isAnimationInProgress={isInProgress}
        ref={svgButtonRef}
      />
    </>
  );
};

export default AnimatedMobileNavigation;
