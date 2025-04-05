import { SkillType } from "../types/types";

export type SkillsData = {
  allTechnologies: SkillType[];
};

export const skillsQuery = `query {
      allTechnologies(orderBy:  position_ASC) {
          logo {
            url
          }
          skills {
            id
            skillDescription
          }
          technologyName
        }
      }
  `;
