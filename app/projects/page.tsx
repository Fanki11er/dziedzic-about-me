import TopWrapper from "../components/TopWrapper/TopWrapper";
import { HeaderWrapper } from "../components/HeaderWrapper/HeaderWrapper.styles";
import ProjectsAnimation from "../components/ProjectsAnimation/ProjectsAnimation";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection";
import TitleHeader from "../components/TitleHeader/TitleHeader.styles";
import GitHubButton from "../components/GitHubButtonWrapper/GitHubButtonWrapper";

const ProjectsPage = () => {
  return (
    <main>
      <TopWrapper>
        <HeaderWrapper $imageUrl={"/images/ProjectsBackground.svg"}>
          <TitleHeader>
            <span>My</span> Projects
          </TitleHeader>
          <GitHubButton />
        </HeaderWrapper>

        <ProjectsAnimation />
      </TopWrapper>
      <ProjectsSection />
    </main>
  );
};

export default ProjectsPage;
