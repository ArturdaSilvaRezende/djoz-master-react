import * as C from "./style";
import { ServicesHero } from "./ServicesHero";
import { ServicesItems } from "./ServicesItems";

export const Services = () => {
  return (
    <C.ServicesSection>
      <ServicesHero />
      <ServicesItems />
    </C.ServicesSection>
  );
};
