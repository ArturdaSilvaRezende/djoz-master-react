import { useToggle } from "../../../shared/hooks/useToggle";
import { HeroDescription } from "./HeroDescription";
import { HeroModal } from "./HeroModal";
import * as C from "./style";

export const Hero = () => {
  const { state } = useToggle();

  return (
    <C.HeroSection>
      <HeroDescription />
      {state.isModalHero && <HeroModal />}
    </C.HeroSection>
  );
};
