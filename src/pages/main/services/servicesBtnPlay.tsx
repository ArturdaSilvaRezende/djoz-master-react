import { useToggle } from "../../../shared/hooks/useToggle";
import { FaPlay } from "react-icons/fa";
import * as C from "./style";

export const ServicesBtnPlay = () => {
  const { dispatch } = useToggle();

  const HandleOpenModal = () => {
    dispatch({ type: "TOGGLE_SERVICES_MODAL" });
  };

  return (
    <C.ServicesBtnPlay>
      <button onClick={HandleOpenModal}>
        <FaPlay />
      </button>
    </C.ServicesBtnPlay>
  );
};
