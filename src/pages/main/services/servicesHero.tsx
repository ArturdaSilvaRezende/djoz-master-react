import { useState, useRef } from "react";
import * as C from "./style";
import { ServicesBtnPlay } from "./servicesBtnPlay";
import { ServicesModal } from "./servicesModal";

export const ServicesHero = () => {
  const ServicesHeroRef = useRef<HTMLDivElement | null>(null);
  const ServicesVideoRef = useRef<HTMLVideoElement | null>(null);
  const [isServicesHeroModal, setIsServicesHeroModal] = useState(false);

  return (
    <C.ServicesHero>
      <ServicesBtnPlay
        modalRef={ServicesHeroRef}
        isModal={isServicesHeroModal}
        setIsModal={setIsServicesHeroModal}
      />
      <ServicesModal
        modalRef={ServicesHeroRef}
        modalVideoRef={ServicesVideoRef}
        isModal={isServicesHeroModal}
        setIsModal={setIsServicesHeroModal}
      />
    </C.ServicesHero>
  );
};
