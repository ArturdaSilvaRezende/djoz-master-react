import * as C from "./style";
import { Header } from "../../components/Header";
import { Footer } from "../../components/footer";
import { Breadcrumbs } from "../../components/breadcrumbs";
import { GlobalTitle } from "../../components/title";
import { DiscographyItems } from "./discographyItems";

export const Discography = () => {
  return (
    <C.Discography>
      <Header background="#290849" />

      <C.Container>
        <Breadcrumbs title="Discography" />
        <GlobalTitle title="Latest Releases" description="Discography" />
        <DiscographyItems />
      </C.Container>

      <Footer />
    </C.Discography>
  );
};
