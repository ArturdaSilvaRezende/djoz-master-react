import { Header } from "../../components/header";
import { Events } from "./events/events";
import { Hero } from "./hero/hero";
import { Latest } from "./latest/latest";
import { Services } from "./services/services";

export const Main = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Events />
      <Services />
      <Latest />
    </main>
  );
};
