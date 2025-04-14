import { ProjectsButton } from "@/app/page.styles";
import { EXTERNAL_PAGES } from "@/app/utilities/constants";
import { GitHubButtonWrapper } from "./GitHubButtonWrapper.styles";

const GitHubButton = () => {
  return (
    <GitHubButtonWrapper>
      <ProjectsButton href={EXTERNAL_PAGES.gitHub} passHref target={"_blank"}>
        Go to GitHub
      </ProjectsButton>
    </GitHubButtonWrapper>
  );
};

export default GitHubButton;
