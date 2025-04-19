import { LOCATIONS_COLORS, ROUTES } from "./constants";

const { home, about, contact, projects, notFound } = ROUTES;

export const getColorForLocation = (pathname: string) => {
  switch (pathname) {
    case home:
      return LOCATIONS_COLORS[home];
    case projects:
      return LOCATIONS_COLORS[projects];
    case contact:
      return LOCATIONS_COLORS[contact];
    case about:
      return LOCATIONS_COLORS[about];
    default:
      return LOCATIONS_COLORS[notFound];
  }
};
