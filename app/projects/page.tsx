import TopWrapper from "../components/TopWrapper/TopWrapper";
import { TitleHeader } from "./projectPage.styles";
import { HeaderWrapper } from "../components/HeaderWrapper/HeaderWrapper.styles";
import ProjectsAnimation from "../components/ProjectsAnimation/ProjectsAnimation";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection";

const ProjectsPage = () => {
  return (
    <>
      <TopWrapper>
        <HeaderWrapper $imageUrl={"/images/ProjectsBackground.svg"}>
          <TitleHeader>
            <span>My</span> Projects
          </TitleHeader>
        </HeaderWrapper>

        <ProjectsAnimation />
      </TopWrapper>
      <ProjectsSection />
    </>
  );
};

export default ProjectsPage;
