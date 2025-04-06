import { SingleAdditionalSkill } from "@/app/types/types";
import bulbPointerImg from "../../assets/icons/Bulb.svg";
import {
  AdditionalSkillContent,
  AdditionalSkillWrapper,
  PointerImage,
} from "./AdditionalSkill.styles";

type Props = {
  additionalSkillContent: SingleAdditionalSkill;
};

const AdditionalSkill = ({ additionalSkillContent }: Props) => {
  const { id, additionalSkill } = additionalSkillContent;

  return (
    <AdditionalSkillWrapper key={id}>
      <PointerImage src={bulbPointerImg} alt={"Bulb image"} />
      <AdditionalSkillContent>{additionalSkill}</AdditionalSkillContent>
    </AdditionalSkillWrapper>
  );
};

export default AdditionalSkill;
