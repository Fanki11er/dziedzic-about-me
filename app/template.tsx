"use client";
import { PropsWithChildren, useRef } from "react";
import { TransitionDiv } from "./components/TransitionDiv/TransitionDiv.styles";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useLocationColor from "./hooks/useLocationColor";
import useInitialRender from "./hooks/useInitialRender";

const Template = ({ children }: PropsWithChildren) => {
  const transitionDiv = useRef(null);
  gsap.registerPlugin(useGSAP);
  const color = useLocationColor();

  const getIsInitial = useInitialRender();

  const fadeOut = () => {
    const tl = gsap.timeline();
    tl.fromTo(
      transitionDiv.current,
      { x: "120%" },
      { delay: 0.2, duration: 0.5, x: "+=120%" }
    );
  };

  useGSAP(() => {
    if (!getIsInitial()) {
      fadeOut();
    }
  });

  return (
    <>
      {children}
      <TransitionDiv $color={color} id={"transitionDiv"} ref={transitionDiv} />
    </>
  );
};

export default Template;
