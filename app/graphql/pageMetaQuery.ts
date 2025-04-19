export const pageMetaQuery = (path: string) => {
  return `query {
    pageSeo(filter: {path: {eq: ${path}}}) {
    path
    pageName
    description
  }
}`;
};
