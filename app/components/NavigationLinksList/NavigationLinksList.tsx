import LinksListElement from "../LinksListElement/LinksListElement";
import { Wrapper } from "./NavigationLinksList.styles";
import { Icon } from "../Icon/Icon.styles";
import { Home2 as Home } from "@styled-icons/remix-fill";
import { PageMultiple as Projects } from "@styled-icons/foundation";
import { FilePersonFill as About } from "@styled-icons/bootstrap";
import { Envelope } from "@styled-icons/boxicons-solid";
import { Git, Youtube } from "@styled-icons/boxicons-logos";
import { Linkedin } from "@styled-icons/fa-brands";
import { ROUTES } from "@/app/utilities/constants";

type Props = {
  hideOnMobile?: boolean;
};

const { home, about, contact, projects } = ROUTES;

//Todo Find better way to get routes
const NavigationLinksList = ({ hideOnMobile }: Props) => {
  return (
    <Wrapper className={hideOnMobile ? "hide" : undefined}>
      <LinksListElement linkToPage={home} label={"Home"}>
        <Icon>
          <Home />
        </Icon>
      </LinksListElement>
      <LinksListElement linkToPage={projects} label={"Projects"}>
        <Icon>
          <Projects />
        </Icon>
      </LinksListElement>
      <LinksListElement linkToPage={about} label={"About"}>
        <Icon>
          <About />
        </Icon>
      </LinksListElement>
      <LinksListElement linkToPage={contact} label={"Contact"}>
        <Icon>
          <Envelope />
        </Icon>
      </LinksListElement>
      <LinksListElement
        linkToPage={"https://github.com/Fanki11er"}
        label={"GitHub"}
        newWindow={true}
        externalLink={true}
      >
        <Icon>
          <Git />
        </Icon>
      </LinksListElement>
      <LinksListElement
        linkToPage={"https://www.linkedin.com/in/dziedzic-k/"}
        label={"LinkedIn"}
        newWindow={true}
        externalLink={true}
      >
        <Icon>
          <Linkedin />
        </Icon>
      </LinksListElement>
      <LinksListElement
        linkToPage={"https://youtube.com/@fanki11er"}
        label={"YouTube"}
        newWindow={true}
        externalLink={true}
      >
        <Icon>
          <Youtube />
        </Icon>
      </LinksListElement>
    </Wrapper>
  );
};

export default NavigationLinksList;
