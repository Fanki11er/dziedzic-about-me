import { HeaderWrapper } from "../components/HeaderWrapper/HeaderWrapper.styles";
import TopWrapper from "../components/TopWrapper/TopWrapper";
import { PersonImage, StyledHeader } from "./AboutPage.styles";
import personImage from "../assets/images/Person.svg";
import AboutSection from "../components/AboutSection/AboutSection";
import { getPageMetadata } from "../utilities/seo";

export const generateMetadata = () => getPageMetadata("About");

const AboutPage = () => {
  return (
    <main>
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
    </main>
  );
};

export default AboutPage;
