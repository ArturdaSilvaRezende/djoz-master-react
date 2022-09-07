import { Countdown } from "../../components/countdown";
import { Header } from "../../components/header";
import { Events } from "./events";
import { Hero } from "./hero";
import { Latest } from "./latest";
import { Services } from "./services";

export const Main = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Events />
      <Services />
      <Latest />
      <Countdown />
    </main>
  );
};
