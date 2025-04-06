import { ProjectType } from "@/app/types/types";
import {
  ProjectsWrapper,
  SourceImage,
  SourceLink,
  SourceWrapper,
} from "./ProjectsSection.styles";
import sourceCodeImage from "../../assets/images/SourceCodeImage.svg";
import SingleProject from "../SingleProject/SingleProject";
import { projectsQuery } from "@/app/graphql/projectsQuery";
import { performRequest } from "@/app/lib/datocms";

type ProjectsData = {
  allProjects: ProjectType[];
};

const ProjectsSection = async () => {
  const projects = await performRequest<ProjectsData>(projectsQuery);

  const renderProjectsData = (projectData: ProjectsData) => {
    const { allProjects } = projectData || [];
    return allProjects.map((project) => {
      return <SingleProject projectData={project} key={project.projectName} />;
    });
  };

  return (
    <ProjectsWrapper>
      {renderProjectsData(projects)}
      <SourceWrapper>
        <SourceImage src={sourceCodeImage} alt={"Page source code image"} />
        <SourceLink
          href={"https://github.com/Fanki11er/New_about-me"}
          target="_blank"
        >
          Check <span>code</span> of this page
        </SourceLink>
      </SourceWrapper>
    </ProjectsWrapper>
  );
};

export default ProjectsSection;
