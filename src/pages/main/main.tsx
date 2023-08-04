import { Countdown } from "../../components/countdown";
import { Footer } from "../../components/footer";
import { Header } from "../../components/Header";
import { Events } from "./events";
import { Hero } from "./hero";
import { Latest } from "./latest";
import { Services } from "./services";

export const Main = () => {
  return (
    <>
      <Header background="rgba(42, 1, 74, 0.5)" />
      <main>
        <Hero />
        <Events />
        <Services />
        <Latest />
        <Countdown />
      </main>
      <Footer />
    </>
  );
};
