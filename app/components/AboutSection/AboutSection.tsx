import {
  AboutContent,
  AboutWrapper,
  AdditionalSkillsSection,
  PortraitImg,
} from "./AboutSection.styles";
import portraitImage from "../../assets/images/Portrait.svg";
import {
  AboutContentParagraph,
  SingleAdditionalSkill,
} from "@/app/types/types";
import { performRequest } from "@/app/lib/datocms";
import { aboutParagraphsQuery } from "@/app/graphql/aboutParagraphsQuery";
import AdditionalSkill from "../AdditionalSkill/AdditionalSkill";
import { additionalSkillsQuery } from "@/app/graphql/additionalSkillsQuery";

type AboutParagraphsData = {
  aboutMe: {
    aboutParagraphs: AboutContentParagraph[];
  };
};

type AdditionalSkillsData = {
  allSingleAdditionalSkills: SingleAdditionalSkill[];
};

const AboutSection = async () => {
  const aboutParagraphs = await performRequest<AboutParagraphsData>(
    aboutParagraphsQuery
  );

  const additionalSkills = await performRequest<AdditionalSkillsData>(
    additionalSkillsQuery
  );

  const renderAboutContent = (aboutContent: AboutParagraphsData) => {
    const {
      aboutMe: { aboutParagraphs },
    } = aboutContent;
    return aboutParagraphs.map(({ paragraph, id }) => {
      return <AboutContent key={id}>{paragraph}</AboutContent>;
    });
  };

  const renderAdditionalSkills = (additionalSkills: AdditionalSkillsData) => {
    const { allSingleAdditionalSkills } = additionalSkills;
    return allSingleAdditionalSkills.map((additionalSkill) => {
      return (
        <AdditionalSkill
          key={additionalSkill.id}
          additionalSkillContent={additionalSkill}
        />
      );
    });
  };

  return (
    <>
      <AboutWrapper>
        <PortraitImg src={portraitImage} alt={"Portrait image"} />
        {renderAboutContent(aboutParagraphs)}
      </AboutWrapper>
      <AdditionalSkillsSection>
        {renderAdditionalSkills(additionalSkills)}
      </AdditionalSkillsSection>
    </>
  );
};

export default AboutSection;
