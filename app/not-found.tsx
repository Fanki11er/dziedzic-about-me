import TitleHeader from "./components/TitleHeader/TitleHeader.styles";
import TopWrapper from "./components/TopWrapper/TopWrapper";
import {
  NotFoundImage,
  Placeholder,
  StyledHeaderWrapper,
} from "./notFoundPage.styles";
import o4oImage from "./assets/images/O4OImage.svg";

const NotFoundPage = () => {
  return (
    <>
      <TopWrapper>
        <StyledHeaderWrapper $imageUrl={"/images/Not_Found.svg"}>
          <TitleHeader>
            Page <span>not</span> found
          </TitleHeader>
        </StyledHeaderWrapper>
        <NotFoundImage src={o4oImage} alt={"404 image"} />
      </TopWrapper>
      <Placeholder />
    </>
  );
};

export default NotFoundPage;
