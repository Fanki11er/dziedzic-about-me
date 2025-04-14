import { ProjectsButton } from "@/app/page.styles";
import { EXTERNAL_PAGES } from "@/app/utilities/constants";
import { AbsoluteButtonWrapper } from "../AbsoluteButtonWrapper/AbsoluteButtonWrapper";

const GitHubButton = () => {
  return (
    <AbsoluteButtonWrapper>
      <ProjectsButton href={EXTERNAL_PAGES.gitHub} passHref target={"_blank"}>
        Go to GitHub
      </ProjectsButton>
    </AbsoluteButtonWrapper>
  );
};

export default GitHubButton;
