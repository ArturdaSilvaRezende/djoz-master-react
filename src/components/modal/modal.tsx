import ReactDOM from "react-dom";
import { MutableRefObject, useCallback, useRef } from "react";
import * as C from "./style";
import { useGlobalContext } from "../../shared/context/globalContext";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./animation.css";

type srcVideo = {
  srcMP4?: string;
  srcOGG?: string;
};

export const Modal = (props: srcVideo) => {
  const { isModal, setIsModal, modalRef } = useGlobalContext();
  const ref = modalRef as MutableRefObject<HTMLDivElement>;
  const refVideo = useRef<HTMLVideoElement | null>(null);

  const closeModal = useCallback(() => {
    if (isModal === true) {
      ref.current.classList.remove("zoomIn");
      ref.current.classList.add("zoomOut");

      setTimeout(() => {
        ref.current.style.display = "none";
      }, 1100);

      if (refVideo.current !== null) {
        refVideo.current.pause();
      }

      return setIsModal(false);
    }
  }, [isModal, setIsModal, ref]);

  return ReactDOM.createPortal(
    <C.ModalGlobal ref={ref}>
      <video controls autoPlay={true} ref={refVideo}>
        <source src={props.srcMP4} type="video/mp4" />
        <source src={props.srcOGG} type="video/ogg" />
        Your browser does not support the video tag.
      </video>
      <button onClick={closeModal}>
        <AiOutlineCloseCircle />
      </button>
    </C.ModalGlobal>,
    document.getElementById("modal") as HTMLDivElement
  );
};
