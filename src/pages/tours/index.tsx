import * as C from "./style";
import { Header } from "../../components/Header";
import { Footer } from "../../components/footer";
import { Breadcrumbs } from "../../components/breadcrumbs";
import { Countdown } from "../../components/countdown";
import { ToursItems } from "./toursItems";

export const Tours = () => {
  return (
    <C.Tours>
      <Header background="#290849" />

      <C.Container>
        <Breadcrumbs title="Tours" />
        <Countdown />
        <ToursItems />
      </C.Container>

      <Footer />
    </C.Tours>
  );
};
