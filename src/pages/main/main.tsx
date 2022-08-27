import { Header } from "../../components/header";
import { Events } from "./events/events";
import { Hero } from "./hero/hero";

export const Main = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Events />
    </main>
  );
};
