import { useCallback, MutableRefObject } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useGlobalContext } from "../../shared/context/globalContext";

export const HeaderBtn = () => {
  const { isMenu, setIsMenu, menuRef } = useGlobalContext();

  const handleMenu = useCallback(() => {
    const ref = (menuRef as MutableRefObject<HTMLElement>).current;

    if (!isMenu) {
      ref.classList.remove("fadeOut");
      ref.style.display = "block";
      ref.classList.add("fadeIn");
      return setIsMenu(true);
    } else {
      ref.classList.remove("fadeIn");
      ref.classList.add("fadeOut");

      setTimeout(() => {
        ref.style.display = "none";
      }, 1100);

      return setIsMenu(false);
    }
  }, [isMenu, menuRef, setIsMenu]);

  return (
    <button onClick={handleMenu} className="menu__btn">
      {isMenu === true ? <AiOutlineClose /> : <FaBars />}
    </button>
  );
};
