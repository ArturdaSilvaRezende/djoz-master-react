import { useGlobalContext } from "../../../shared/context/globalContext";
import { Modal } from "../../../shared/types/typeModal";
import { FaPlay } from "react-icons/fa";

export const HeroDescription = (props: Modal) => {
  const { showModal } = useGlobalContext();

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
        <button
          type="button"
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
      </div>
    </div>
  );
};
