import LinkElement from "../LinkElement/LinkElement";
import { Wrapper } from "./NavigationLinksList.styles";
import { Icon } from "../Icon/Icon.styles";
import { Home2 as Home } from "@styled-icons/remix-fill";
import { PageMultiple as Projects } from "@styled-icons/foundation";
import { FilePersonFill as About } from "@styled-icons/bootstrap";
import { Envelope } from "@styled-icons/boxicons-solid";
import { Git, Youtube } from "@styled-icons/boxicons-logos";
import { Linkedin } from "@styled-icons/fa-brands";
import { EXTERNAL_PAGES, ROUTES } from "@/app/utilities/constants";
import ExternalLinkElement from "../ExternalLinkElement/ExternalLinkElement";
import { LinksListElement } from "../LinkElement/LinksListElement.styles";

type Props = {
  hideOnMobile?: boolean;
};

const { home, about, contact, projects } = ROUTES;

const NavigationLinksList = ({ hideOnMobile }: Props) => {
  return (
    <Wrapper className={hideOnMobile ? "hide" : undefined}>
      <LinksListElement>
        <LinkElement linkToPage={home} label={"Home"}>
          <Icon>
            <Home />
          </Icon>
        </LinkElement>
      </LinksListElement>
      <LinksListElement>
        <LinkElement linkToPage={projects} label={"Projects"}>
          <Icon>
            <Projects />
          </Icon>
        </LinkElement>
      </LinksListElement>
      <LinksListElement>
        <LinkElement linkToPage={about} label={"About"}>
          <Icon>
            <About />
          </Icon>
        </LinkElement>
      </LinksListElement>
      <LinksListElement>
        <LinkElement linkToPage={contact} label={"Contact"}>
          <Icon>
            <Envelope />
          </Icon>
        </LinkElement>
      </LinksListElement>
      <LinksListElement>
        <ExternalLinkElement
          linkToPage={EXTERNAL_PAGES.gitHub}
          label={"GitHub"}
        >
          <Icon>
            <Git />
          </Icon>
        </ExternalLinkElement>
      </LinksListElement>
      <LinksListElement>
        <ExternalLinkElement
          linkToPage={EXTERNAL_PAGES.linkedIn}
          label={"LinkedIn"}
        >
          <Icon>
            <Linkedin />
          </Icon>
        </ExternalLinkElement>
      </LinksListElement>

      <LinksListElement>
        <ExternalLinkElement
          linkToPage={EXTERNAL_PAGES.youTube}
          label={"YouTube"}
        >
          <Icon>
            <Youtube />
          </Icon>
        </ExternalLinkElement>
      </LinksListElement>
    </Wrapper>
  );
};

export default NavigationLinksList;
