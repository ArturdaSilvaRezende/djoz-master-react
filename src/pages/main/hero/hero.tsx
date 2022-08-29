import { useState, useRef } from "react";
import * as C from "./style";
import { HeroDescription } from "./heroDescription";
import { HeroModal } from "./heroModal";

export const Hero = () => {
  const HeroRef = useRef<HTMLDivElement | null>(null);
  const VideoRef = useRef<HTMLVideoElement | null>(null);
  const [isHeroModal, setIsHeroModal] = useState(false);

  return (
    <C.HeroSection>
      <HeroDescription
        modalRef={HeroRef}
        isModal={isHeroModal}
        setIsModal={setIsHeroModal}
      />
      <HeroModal
        modalRef={HeroRef}
        modalVideoRef={VideoRef}
        isModal={isHeroModal}
        setIsModal={setIsHeroModal}
      />
    </C.HeroSection>
  );
};
