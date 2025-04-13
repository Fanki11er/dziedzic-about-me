"use client";
import useLocationColor from "@/app/hooks/useLocationColor";
import { PropsWithChildren, SyntheticEvent } from "react";
import { ListElement, MenuLabel, StyledLink } from "./LinksListElement.styles";
import { usePathname, useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export type ListElementProps = PropsWithChildren & {
  linkToPage: string;
  label: string;
  newWindow?: boolean;
  externalLink?: boolean;
};

const LinksListElement = ({
  linkToPage,
  label,
  children,
  externalLink,
}: ListElementProps) => {
  const color = useLocationColor(linkToPage);
  const pathname = usePathname();

  gsap.registerPlugin(useGSAP);
  const router = useRouter();

  const tlIn = gsap.timeline();

  const fadeIn = () => {
    const transitionDiv = document.getElementById("transitionDiv");

    return tlIn
      .fromTo(
        transitionDiv,
        { x: "0%" },
        {
          delay: 0.2,
          duration: 0.3,
          x: "+=120%",
        }
      )
      .to(transitionDiv, {
        duration: 0.5,
        backgroundColor: color,
        onComplete: () => {
          router.push(linkToPage);
        },
      });
  };

  const handleTransition = (e: SyntheticEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    fadeIn();
  };

  useGSAP(() => {
    tlIn.clear();
  });

  return (
    <ListElement>
      <StyledLink
        onClick={handleTransition}
        className={pathname === linkToPage ? "isActive" : ""}
        color={color}
        passHref={externalLink ? true : false}
        href={linkToPage}
        target={externalLink ? "_blank" : ""}
      >
        {children}
        <MenuLabel>{label}</MenuLabel>
      </StyledLink>
    </ListElement>
  );
};

export default LinksListElement;
