"use client";

import { PropsWithChildren } from "react";
import TopWrapperBackground from "../TopWrapperBackground/TopWrapperBackground";
import { Wrapper } from "./TopWrapper.styles";

const TopWrapper = ({ children }: PropsWithChildren) => {
  return (
    <Wrapper>
      <TopWrapperBackground />
      {children}
    </Wrapper>
  );
};

export default TopWrapper;
