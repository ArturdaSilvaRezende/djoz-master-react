import * as C from "./style";
import { Menu } from "./headerMenu";
import "./animation.css";

export const Header = () => {
  return (
    <C.Header>
      <C.Container>
        <a className="header__logo" href="index.html">
          <span>DJ</span>
          <span>OZ</span>
        </a>
        <Menu />
      </C.Container>
    </C.Header>
  );
};
