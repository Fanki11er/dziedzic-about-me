import { ProjectType } from "@/app/types/types";
import {
  ProjectsWrapper,
  SourceImage,
  SourceLink,
  SourceWrapper,
} from "./ProjectsSection.styles";
import sourceCodeImage from "../../assets/images/SourceCodeImage.svg";

type ProjectsData = {
  allProject: ProjectType[];
};

const ProjectsSection = () => {
  // const {
  //   allDatoCmsProject: { nodes },
  // } = useStaticQuery(graphql`
  //   {
  //     allDatoCmsProject(sort: { fields: position, order: ASC }) {
  //       nodes {
  //         position
  //         projectName
  //         projectDescription
  //         appLink
  //         githubLink
  //         credentials {
  //           password
  //           username
  //         }
  //         projectPreview {
  //           alt
  //           url
  //         }
  //       }
  //     }
  //   }
  // `) as ProjectsInterface;

  return (
    <ProjectsWrapper>
      {/* {renderProjectsData(nodes)} */}
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

// const renderProjectsData = (projectData: ProjectType[]) => {
//   return projectData.map(
//     ({
//       position,
//       projectName,
//       projectDescription,
//       projectPreview: { alt, url },
//       appLink,
//       githubLink,
//       credentials,
//     }) => {
//       return (
//         <SingleProject key={position}>
//           <ContentWrapper>
//             <Content>
//               <Header>{projectName}</Header>
//               <Description>
//                 {projectDescription}
//                 {credentials.length > 0 && (
//                   <CredentialsWrapper>
//                     <CredentialRow>
//                       <span>Username:</span>
//                       {credentials[0].username}
//                     </CredentialRow>
//                     <CredentialRow>
//                       <span>Password:</span>
//                       {credentials[0].password}
//                     </CredentialRow>
//                   </CredentialsWrapper>
//                 )}
//               </Description>
//             </Content>
//             <Screenshot src={url} alt={alt} />
//           </ContentWrapper>
//           <LinksWrapper>
//             <OutsideLink href={githubLink} target="_blank">
//               <span>Go</span>to code
//             </OutsideLink>
//             <OutsideLink href={appLink} target="_blank">
//               <span>Go</span>to demo
//             </OutsideLink>
//           </LinksWrapper>
//         </SingleProject>
//       );
//     }
//   );
// };
