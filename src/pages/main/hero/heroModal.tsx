import Portal from "../../../components/Portal";
import { useToggle } from "../../../shared/hooks/useToggle";
import { AiOutlineCloseCircle } from "react-icons/ai";
import VideoHeroMP4 from "../assets/videos/hero.mp4";
import VideoHeroOGG from "../assets/videos/hero.ogv";
import "../../../shared/style/modalContents.css";
import "../../../shared/style/modalAnimation.css";

export const HeroModal = () => {
  const { dispatch } = useToggle();

  const HandleCloseModal = () => {
    dispatch({ type: "TOGGLE_HERO_MODAL" });
  };

  return (
    <div className="modal">
      <Portal containerId="modal-root">
        <div className="modal__contents zoomIn">
          <video controls>
            <source src={VideoHeroMP4} type="video/mp4" />
            <source src={VideoHeroOGG} type="video/ogg" />
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
