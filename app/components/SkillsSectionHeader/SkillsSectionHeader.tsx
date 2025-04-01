import {
  ImageWrapper,
  SkillsSectionHeaderText,
  SkillsSectionHeaderWrapper,
  ToolsImage,
} from "./SkillsSectionHeader.styles";
import toolsImage from "../../assets/images/Tools.svg";

const SkillsSectionHeader = () => {
  return (
    <SkillsSectionHeaderWrapper>
      <ImageWrapper>
        <ToolsImage src={toolsImage} alt={"Tools image"} />
      </ImageWrapper>

      <SkillsSectionHeaderText>
        Engineering with <span>the best tools</span> behind my belt
      </SkillsSectionHeaderText>
    </SkillsSectionHeaderWrapper>
  );
};

export default SkillsSectionHeader;
