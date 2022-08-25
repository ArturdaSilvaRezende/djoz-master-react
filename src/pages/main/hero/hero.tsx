import { MutableRefObject, useCallback } from "react";
import * as C from "./style";
import { FaPlay } from "react-icons/fa";
import { useGlobalContext } from "../../../shared/context/globalContext";
import { Modal } from "../../../components/modal/modal";
import VideoHeroMP4 from "../assets/videos/hero.mp4";
import VideoHeroOGG from "../assets/videos/hero.ogv";

export const Hero = () => {
  const { isModal, setIsModal, modalRef } = useGlobalContext();
  const ref = modalRef as MutableRefObject<HTMLDivElement>;

  const showModal = useCallback(() => {
    if (isModal === false) {
      ref.current.classList.remove("zoomOut");
      ref.current.style.display = "block";
      ref.current.classList.add("zoomIn");
      return setIsModal(true);
    }
  }, [isModal, setIsModal, ref]);

  return (
    <C.HeroSection>
      <div className="heroSection__description">
        <p>New Single</p>
        <p>
          <span>Feel the heart</span>
          <span>beats</span>
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="heroSection__btn">
          <button type="button" onClick={showModal}>
            <FaPlay />
          </button>
        </div>
      </div>

      <Modal srcMP4={VideoHeroMP4} srcOGG={VideoHeroOGG} />
    </C.HeroSection>
  );
};
