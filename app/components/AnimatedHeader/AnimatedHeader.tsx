"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  HeaderWrapper,
  MainHeader,
  SecondSmallHeder,
  SmallHeader,
} from "./AnimatedHeader.styles";

const AnimatedHeader = () => {
  const headerWrapper = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    const header = headerWrapper.current;
    const span = header!.querySelector("span");
    const smallHeader = header!.querySelector("#small-header");
    const secondSmallHeader = header!.querySelector("#second-small-header");
    const firstMainHeader = header!.querySelector("#first-main-header");
    const secondMainHeader = header!.querySelector("#second-main-header");

    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut" },
    });
    tl.fromTo(
      header,
      { autoAlpha: "0", scale: "0.8" },
      {
        delay: "1.5",
        duration: "3",
        autoAlpha: "1",
        scale: "1",
      }
    )
      .fromTo(
        span,
        { autoAlpha: "0" },
        {
          duration: "1",
          autoAlpha: 1,
        },
        "-=1.5"
      )
      .to([smallHeader!, firstMainHeader!], {
        autoAlpha: 0,
        duration: 2,
        delay: 1,
      })
      .to(
        [secondMainHeader!, secondSmallHeader!],
        { display: "initial", opacity: 1, duration: 3 },
        "-=2"
      );
  });

  return (
    <HeaderWrapper ref={headerWrapper}>
      <SmallHeader id={"small-header"}>
        <span>K</span>rzysztof Dzie<span>dz</span>ic
      </SmallHeader>
      <SecondSmallHeder id={"second-small-header"}>
        <span>K</span>rzysztof Dzie<span>dz</span>ic
      </SecondSmallHeder>
      <MainHeader id={"first-main-header"}>
        <span>Front-end</span> developer
      </MainHeader>{" "}
      <MainHeader id={"second-main-header"}>
        A <span>reinforcement</span> for <br />
        your development <span>team</span>
      </MainHeader>
    </HeaderWrapper>
  );
};

export default AnimatedHeader;
