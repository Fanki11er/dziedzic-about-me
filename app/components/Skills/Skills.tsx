import { List } from "@styled-icons/foundation";
import {
  DescriptionWrapper,
  SkillDescription,
  SkillsContainer,
  SkillWrapper,
  TechnologyName,
} from "./Skills.styles";
import { SkillType } from "@/app/types/types";

type SkillsData = {
  allDatoCmsTechnology: {
    nodes: SkillType[];
  };
};

const Skills = () => {
  // const skills = useStaticQuery(graphql`
  //   {
  //     allDatoCmsTechnology(sort: { fields: position, order: ASC }) {
  //       nodes {
  //         logo {
  //           url
  //         }
  //         skills {
  //           id
  //           skillDescription
  //         }
  //         technologyName
  //       }
  //     }
  //   }
  // `);

  const renderSkill = (skills: SkillsData) => {
    const {
      allDatoCmsTechnology: { nodes },
    } = skills;

    return nodes.map(({ technologyName, logo, skills }) => {
      return (
        <SkillWrapper key={technologyName} imageUrl={logo.url}>
          <DescriptionWrapper className={"description"}>
            <List className={"list"}>
              {skills.map(({ skillDescription, id }) => {
                return (
                  <SkillDescription key={id}>
                    {skillDescription}
                  </SkillDescription>
                );
              })}
            </List>
          </DescriptionWrapper>
          <TechnologyName className={"technologyName"}>
            {technologyName}
          </TechnologyName>
        </SkillWrapper>
      );
    });
  };

  return <SkillsContainer>{/*renderSkill(skills)*/}</SkillsContainer>;
};

export default Skills;
