import { useToggle } from "../../shared/hooks/useToggle";
import Portal from "../../components/Portal";
import { AiOutlineCloseCircle } from "react-icons/ai";
import VideoHeroMP4 from "./videos/skill_video.mp4";
import "../../shared/style/modalContents.css";
import "../../shared/style/modalAnimation.css";

export const SkillVideo = () => {
  const { dispatch } = useToggle();

  const HandleCloseModal = () => {
    dispatch({ type: "TOGGLE_ABOUT_MODAL" });
  };

  return (
    <div className="modal">
      <Portal containerId="modal-root">
        <div className="modal__contents zoomIn">
          <video controls>
            <source src={VideoHeroMP4} type="video/mp4" />
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
