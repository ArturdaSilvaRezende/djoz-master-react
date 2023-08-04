import { useToggle } from "../../shared/hooks/useToggle";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const HeaderBtn = () => {
  const { state, dispatch } = useToggle();

  const handleMenu = () => {
    dispatch({ type: "TOGGLE_HEADER" });
  };

  return (
    <button onClick={handleMenu} className="menu__btn">
      {state.isMenuHeader ? <AiOutlineClose /> : <FaBars />}
    </button>
  );
};

export default HeaderBtn;
