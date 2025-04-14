import theme from "../styles/theme";

export const ROUTES = {
  home: "/",
  projects: "/projects",
  about: "/about",
  contact: "/contact",
  notFound: "/404",
};

export const EXTERNAL_PAGES = {
  gitHub: "https://github.com/Fanki11er",
  linkedIn: "https://www.linkedin.com/in/dziedzic-k/",
  youTube: "https://youtube.com/@fanki11er",
};

export const LOCATIONS_COLORS = {
  [ROUTES.home]: theme.colors.darkerBlue,
  [ROUTES.projects]: theme.colors.projects,
  [ROUTES.contact]: theme.colors.contact,
  [ROUTES.about]: theme.colors.dark,
  [ROUTES.notFound]: theme.colors.darkBlue,
};
