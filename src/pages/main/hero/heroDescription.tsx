import { useCallback, MutableRefObject } from "react";
import { FaPlay } from "react-icons/fa";
import { Modal } from "../../../shared/types/typeModal";

export const HeroDescription = (props: Modal) => {
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
    <div className="heroSection__description">
      <p>New Single</p>
      <p>
        <span>Feel the heart</span>
        <span>beats</span>
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="heroSection__btn">
        <button type="button" onClick={showModal}>
          <FaPlay />
        </button>
      </div>
    </div>
  );
};
