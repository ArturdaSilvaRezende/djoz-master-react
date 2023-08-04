import { useToggle } from "../../../shared/hooks/useToggle";
import { ServicesBtnPlay } from "./servicesBtnPlay";
import { ServicesModal } from "./ServicesModal";
import * as C from "./style";

export const ServicesHero = () => {
  const { state } = useToggle();

  return (
    <C.ServicesHero>
      <ServicesBtnPlay />
      {state.isModalServices && <ServicesModal />}
    </C.ServicesHero>
  );
};
