import { useToggle } from "../../../shared/hooks/useToggle";
import { FaPlay } from "react-icons/fa";
import * as C from "./style";

export const HeroDescription = () => {
  const { dispatch } = useToggle();

  const HandleOpenModal = () => {
    dispatch({ type: "TOGGLE_HERO_MODAL" });
  };

  return (
    <C.HeroDescription>
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
        <button type="button" onClick={HandleOpenModal}>
          <FaPlay />
        </button>
      </div>
    </C.HeroDescription>
  );
};
