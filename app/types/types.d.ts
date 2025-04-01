export type SkillType = {
  id: string;
  technologyName: string;
  level: string;
  skills: { skillDescription: string; id: string }[];
  logo: {
    alt: string;
    url: string;
  };
};
