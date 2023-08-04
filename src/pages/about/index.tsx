import * as C from "./style";
import { Header } from "../../components/Header";
import { Breadcrumbs } from "../../components/breadcrumbs";
import { GlobalTitle } from "../../components/title";
import { SkillsSection } from "./aboutSkillsSection";
import { AboutDescription } from "./aboutDescription";
import { AboutPic } from "./aboutPic";
import { AboutServices } from "./aboutServices";
import { Footer } from "../../components/footer";

export const About = () => {
  return (
    <C.About>
      <Header background="#290849" />
      <C.Container>
        <Breadcrumbs title="About" />

        <SkillsSection />

        <AboutDescription />

        <AboutPic />

        <C.AboutServices>
          <GlobalTitle title="Where Do I Play" description="Best service" />
          <AboutServices />
        </C.AboutServices>
      </C.Container>
      <Footer />
    </C.About>
  );
};
