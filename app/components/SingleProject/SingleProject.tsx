import { ProjectType } from "@/app/types/types";
import {
  Content,
  ContentWrapper,
  CredentialRow,
  CredentialsWrapper,
  Description,
  Header,
  LinksWrapper,
  OutsideLink,
  Screenshot,
  SingleProjectWrapper,
} from "./SingleProject.styles";

type Props = {
  projectData: ProjectType;
};

const SingleProject = ({ projectData }: Props) => {
  const {
    position,
    projectName,
    projectDescription,
    appLink,
    githubLink,
    credentials,
    projectPreview,
  } = projectData;
  const { url, alt } = projectPreview;

  return (
    <SingleProjectWrapper key={position}>
      <ContentWrapper>
        <Content>
          <Header>{projectName}</Header>
          <Description>
            {projectDescription}
            {credentials.length > 0 && (
              <CredentialsWrapper>
                <CredentialRow>
                  <span>Username:</span>
                  {credentials[0].username}
                </CredentialRow>
                <CredentialRow>
                  <span>Password:</span>
                  {credentials[0].password}
                </CredentialRow>
              </CredentialsWrapper>
            )}
          </Description>
        </Content>
        <Screenshot src={url} alt={alt} />
      </ContentWrapper>
      <LinksWrapper>
        <OutsideLink href={githubLink} target="_blank">
          <span>Go</span>to code
        </OutsideLink>
        {appLink && (
          <OutsideLink href={appLink} target="_blank">
            <span>Go</span>to demo
          </OutsideLink>
        )}
      </LinksWrapper>
    </SingleProjectWrapper>
  );
};

export default SingleProject;
