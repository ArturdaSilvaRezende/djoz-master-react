import { useEffect, useCallback } from "react";
import HeaderMenuNavigation from "./HeaderMenuNavigation";
import HeaderMenuSocial from "./HeaderMenuSocial";
import { useToggle } from "../../shared/hooks/useToggle";
import HeaderBtn from "./HeaderBtn";
import * as C from "./style";

export const Menu = () => {
  const { state, dispatch } = useToggle();

  const handleResize = useCallback(() => {
    dispatch({ type: "RESIZE_HEADER" });
  }, [dispatch]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <C.Menu>
      {state.isMenuHeader && <HeaderMenuNavigation />}
      <HeaderMenuSocial />
      <HeaderBtn />
    </C.Menu>
  );
};
