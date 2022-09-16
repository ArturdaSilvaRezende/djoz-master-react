import { MutableRefObject } from "react";
import { useGlobalContext } from "../../shared/context/globalContext";
import { Modal } from "../../shared/types/typeModal";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Portal } from "../../components/modal";
import { ModalGlobal } from "../../shared/style/modalStyle";
import VideoHeroMP4 from "./videos/skill_video.mp4";

export const SkillVideo = (props: Modal) => {
  const { closeModal } = useGlobalContext();

  return (
    <Portal className="hero-main__modal">
      <ModalGlobal ref={props.modalRef as MutableRefObject<HTMLDivElement>}>
        <video
          controls
          ref={props.modalVideoRef as MutableRefObject<HTMLVideoElement>}
        >
          <source src={VideoHeroMP4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button
          onClick={() =>
            closeModal({
              isModal: props.isModal,
              setIsModal: props.setIsModal,
              modalRef: props.modalRef,
              modalVideoRef: props.modalVideoRef,
            })
          }
        >
          <AiOutlineCloseCircle />
        </button>
      </ModalGlobal>
    </Portal>
  );
};
