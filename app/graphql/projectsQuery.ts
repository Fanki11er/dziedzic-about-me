export const projectsQuery = `query {
  allProjects(orderBy: position_ASC) {
    position
    projectName
    projectDescription
    appLink
    githubLink
    credentials {
      password
      username
    }
    projectPreview {
      alt
      url
    }
  }
}`;
