import AnimatedEnvelope from "../components/AnimatedEnvelope/AnimatedEnvelope";
import ContactForm from "../components/ContactForm/ContactForm";
import { HeaderWrapper } from "../components/HeaderWrapper/HeaderWrapper.styles";
import TopWrapper from "../components/TopWrapper/TopWrapper";
import { getPageMetadata } from "../utilities/seo";
import { ContactFormSection, Header } from "./contactPage.styles";

export const generateMetadata = () => getPageMetadata("Contact");

const ContactPage = () => {
  return (
    <main>
      <TopWrapper>
        <>
          <HeaderWrapper $imageUrl={"./images/ContactBackground.svg"}>
            <Header>
              Contact<span>me</span>
            </Header>
          </HeaderWrapper>
          <AnimatedEnvelope />
        </>
      </TopWrapper>
      <ContactFormSection>
        <ContactForm />
      </ContactFormSection>
    </main>
  );
};

export default ContactPage;
