import * as C from "./style";
import { ServicesHero } from "./servicesHero";
import { ServicesItems } from "./servicesItems";

export const Services = () => {
  return (
    <C.ServicesSection>
      <ServicesHero />
      <ServicesItems />
    </C.ServicesSection>
  );
};
