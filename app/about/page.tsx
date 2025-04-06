import { HeaderWrapper } from "../components/HeaderWrapper/HeaderWrapper.styles";
import TopWrapper from "../components/TopWrapper/TopWrapper";
import { PersonImage, StyledHeader } from "./AboutPage.styles";
import personImage from "../assets/images/Person.svg";
import AboutSection from "../components/AboutSection/AboutSection";

const AboutPage = () => {
  return (
    <>
      <TopWrapper>
        <>
          <HeaderWrapper $imageUrl={"/images/AboutMeBackground.svg"}>
            <StyledHeader>
              About<span>me</span>
            </StyledHeader>
          </HeaderWrapper>

          <PersonImage src={personImage} alt={"Standing person image"} />
        </>
      </TopWrapper>
      <AboutSection />
    </>
  );
};

export default AboutPage;
