import { useGlobalContext } from "../../../shared/context/globalContext";
import * as C from "./style";
import { FaPlay } from "react-icons/fa";
import { Modal } from "../../../shared/types/typeModal";

export const ServicesBtnPlay = (props: Modal) => {
  const { showModal } = useGlobalContext();

  return (
    <C.ServicesBtnPlay>
      <button
        onClick={() =>
          showModal({
            isModal: props.isModal,
            setIsModal: props.setIsModal,
            modalRef: props.modalRef,
          })
        }
      >
        <FaPlay />
      </button>
    </C.ServicesBtnPlay>
  );
};
