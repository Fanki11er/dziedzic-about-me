"use client";
import { PropsWithChildren, SyntheticEvent, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link, { LinkProps } from "next/link";
import { TransitionDiv } from "../TransitionDiv/TransitionDiv.styles";
import { useRouter } from "next/navigation";

type Props = LinkProps &
  PropsWithChildren & {
    href: string;
    className: string;
  };

const TransitionLink = ({ href, children, ...props }: Props) => {
  const transitionDivIn = useRef(null);
  gsap.registerPlugin(useGSAP);
  const router = useRouter();

  const fadeIn = () => {
    const tl = gsap.timeline();
    tl.fromTo(
      transitionDivIn.current,
      { x: "-=120%" },
      {
        delay: 0.5,
        duration: 1,
        x: "0",
        onComplete: () => {
          router.push(href);
        },
      }
    ).pause(2);
  };

  const fadeOut = () => {
    const tl = gsap.timeline();
    tl.fromTo(
      transitionDivIn.current,
      { x: "0" },
      { delay: 0.5, duration: 1, x: "+=120%" }
    );
  };

  const handleTransition = (e: SyntheticEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    fadeIn();
    fadeOut();
  };

  useGSAP(() => {});
  return (
    <Link href={href} {...props} onClick={handleTransition}>
      <TransitionDiv ref={transitionDivIn} />
      {children}
    </Link>
  );
};

export default TransitionLink;
