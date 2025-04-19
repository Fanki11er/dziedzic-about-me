import { PropsWithChildren } from "react";
import { StyledLink } from "../StyledLink/StyledLink.styles";
import { MenuLabel } from "../LinkElement/LinksListElement.styles";

type Props = PropsWithChildren & {
  linkToPage: string;
  label: string;
};

const ExternalLinkElement = ({ children, label, linkToPage }: Props) => {
  return (
    <StyledLink href={linkToPage} target={"_blank"}>
      {children}
      <MenuLabel>{label}</MenuLabel>
    </StyledLink>
  );
};

export default ExternalLinkElement;
