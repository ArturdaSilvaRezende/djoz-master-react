import { useCallback, MutableRefObject } from "react";
import * as C from "./style";
import { FaPlay } from "react-icons/fa";
import { Modal } from "../../../shared/types/typeModal";

export const ServicesBtnPlay = (props: Modal) => {
  const showModal = useCallback(() => {
    if (props.modalRef !== null) {
      const ref = props.modalRef as MutableRefObject<HTMLDivElement>;
      if (props.isModal === false) {
        ref.current.classList.remove("zoomOut");
        ref.current.style.display = "block";
        ref.current.classList.add("zoomIn");
        return props.setIsModal(true);
      }
    }
  }, [props]);

  return (
    <C.ServicesBtnPlay>
      <button onClick={showModal}>
        <FaPlay />
      </button>
    </C.ServicesBtnPlay>
  );
};
