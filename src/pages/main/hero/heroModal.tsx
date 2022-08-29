import { useCallback, MutableRefObject } from "react";
import { Modal } from "../../../shared/types/typeModal";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Portal } from "../../../components/modal/portal";
import { ModalGlobal } from "../../../shared/style/modalStyle";
import VideoHeroMP4 from "../assets/videos/hero.mp4";
import VideoHeroOGG from "../assets/videos/hero.ogv";

export const HeroModal = (props: Modal) => {
  const closeModal = useCallback(() => {
    if (props.modalRef !== null) {
      const ref = props.modalRef as MutableRefObject<HTMLDivElement>;
      const videoRef =
        props.modalVideoRef as MutableRefObject<HTMLVideoElement>;

      if (props.isModal === true) {
        ref.current.classList.remove("zoomIn");
        ref.current.classList.add("zoomOut");

        setTimeout(() => {
          ref.current.style.display = "none";
        }, 1100);

        if (videoRef.current !== null) {
          videoRef.current.pause();
        }

        return props.setIsModal(false);
      }
    }
  }, [props]);

  return (
    <Portal className="hero-main__modal">
      <ModalGlobal ref={props.modalRef as MutableRefObject<HTMLDivElement>}>
        <video
          controls
          ref={props.modalVideoRef as MutableRefObject<HTMLVideoElement>}
        >
          <source src={VideoHeroMP4} type="video/mp4" />
          <source src={VideoHeroOGG} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
        <button onClick={closeModal}>
          <AiOutlineCloseCircle />
        </button>
      </ModalGlobal>
    </Portal>
  );
};
