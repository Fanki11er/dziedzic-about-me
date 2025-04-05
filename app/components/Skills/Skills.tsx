import { SkillsData, skillsQuery } from "@/app/graphql/skillsQuery";
import { SkillsContainer } from "./Skills.styles";

import { performRequest } from "@/app/lib/datocms";
import SingleSkill from "../SingleSkill/SingleSkill";

const Skills = async () => {
  const skills = await performRequest<SkillsData>(skillsQuery);
  console.log(skills);

  const renderSkill = (skills: SkillsData) => {
    const { allTechnologies } = skills;
    return allTechnologies.map((skill) => {
      return <SingleSkill key={skill.technologyName} skill={skill} />;
    });
  };

  return <SkillsContainer>{renderSkill(skills)}</SkillsContainer>;
};

export default Skills;
