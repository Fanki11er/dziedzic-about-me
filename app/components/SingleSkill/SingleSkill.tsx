import { SkillType } from "@/app/types/types";
import {
  CapabilitiesList,
  DescriptionWrapper,
  SkillDescription,
  SkillWrapper,
  TechnologyName,
} from "./SingleSkill.styles";

type Props = {
  skill: SkillType;
};

const SingleSkill = ({ skill }: Props) => {
  const { technologyName, skills, logo } = skill;
  return (
    <SkillWrapper key={technologyName} $imageUrl={logo.url}>
      <DescriptionWrapper>
        <CapabilitiesList>
          {skills.map(({ skillDescription, id }) => {
            return (
              <SkillDescription key={id}>{skillDescription}</SkillDescription>
            );
          })}
        </CapabilitiesList>
      </DescriptionWrapper>
      <TechnologyName>{technologyName}</TechnologyName>
    </SkillWrapper>
  );
};

export default SingleSkill;
