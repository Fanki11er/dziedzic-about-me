import AnimatedCodeLines from "./components/AnimatedCodeLines/AnimatedCodeLines";
import AnimatedHeader from "./components/AnimatedHeader/AnimatedHeader";
import TopWrapper from "./components/TopWrapper/TopWrapper";
import { HeroImage, ProjectsButton, Title, TitleWrapper } from "./page.styles";
import heroImage from "./assets/images/Hero.svg";
import SkillsSectionHeader from "./components/SkillsSectionHeader/SkillsSectionHeader";
import { ROUTES } from "./utilities/constants";
import Skills from "./components/Skills/Skills";
import { getPageMetadata } from "./utilities/seo";

export const generateMetadata = () => getPageMetadata("Home");

const Home = () => {
  return (
    <main>
      <TopWrapper>
        <TitleWrapper>
          <Title>
            <AnimatedHeader />
            <AnimatedCodeLines />
          </Title>
          <ProjectsButton href={ROUTES.projects}>
            Check my projects
          </ProjectsButton>
        </TitleWrapper>
        <HeroImage src={heroImage} alt={"Hero image"} />
      </TopWrapper>
      <SkillsSectionHeader />
      <Skills />
    </main>
  );
};

export default Home;
