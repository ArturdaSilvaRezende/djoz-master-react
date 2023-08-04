import { useToggle } from "../../../shared/hooks/useToggle";
import Portal from "../../../components/Portal";
import { AiOutlineCloseCircle } from "react-icons/ai";
import ServicesVideoMP4 from "../assets/videos/services.mp4";
import ServicesVideoOGV from "../assets/videos/services.ogv";
import "../../../shared/style/modalContents.css";
import "../../../shared/style/modalAnimation.css";

export const ServicesModal = () => {
  const { dispatch } = useToggle();

  const HandleCloseModal = () => {
    dispatch({ type: "TOGGLE_SERVICES_MODAL" });
  };

  return (
    <div className="modal">
      <Portal containerId="modal-root">
        <div className="modal__contents zoomIn">
          <video controls>
            <source src={ServicesVideoMP4} type="video/mp4" />
            <source src={ServicesVideoOGV} type="video/ogg" />
            Your browser does not support the video tag.
          </video>
          <button onClick={HandleCloseModal}>
            <AiOutlineCloseCircle />
          </button>
        </div>
      </Portal>
    </div>
  );
};
