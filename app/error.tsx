"use client";
import TitleHeader from "./components/TitleHeader/TitleHeader.styles";
import TopWrapper from "./components/TopWrapper/TopWrapper";
import {
  NotFoundImage,
  Placeholder,
  StyledHeaderWrapper,
} from "./notFoundPage.styles";
import errorImage from "./assets/images/ErrorImage.svg";
import { ErrorComponent } from "next/dist/client/components/error-boundary";
import { AbsoluteButtonWrapper } from "./components/AbsoluteButtonWrapper/AbsoluteButtonWrapper";
import { DefaultButton } from "./components/DefaultButton/DefaultButton.styles";

const ErrorPage: ErrorComponent = ({ reset }) => {
  return (
    <>
      <TopWrapper>
        <StyledHeaderWrapper $imageUrl={"/images/Not_Found.svg"}>
          <TitleHeader>
            Something went<span>wrong</span>
          </TitleHeader>
          <AbsoluteButtonWrapper>
            <DefaultButton onClick={reset}>Try again</DefaultButton>
          </AbsoluteButtonWrapper>
        </StyledHeaderWrapper>
        <NotFoundImage src={errorImage} alt={"Error image"} />
      </TopWrapper>
      <Placeholder />
    </>
  );
};

export default ErrorPage;
