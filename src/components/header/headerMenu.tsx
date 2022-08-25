import { MutableRefObject, useEffect } from "react";
import * as C from "./style";
import { HeaderBtn } from "./headerBtn";
import { useGlobalContext } from "../../shared/context/globalContext";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsDribbble } from "react-icons/bs";

export const Menu = () => {
  const { menuRef } = useGlobalContext();
  const ref = menuRef as MutableRefObject<HTMLElement>;

  const handleMenuResize = () => {
    window.onresize = () => {
      if (window.innerWidth > 767) {
        ref.current.classList.remove("fadeOut");
        ref.current.style.display = "block";
      } else {
        ref.current.style.display = "none";
      }
    };
  };

  useEffect(() => {
    handleMenuResize();
  });

  return (
    <C.Menu>
      <nav className="menu__navigation" ref={ref}>
        <ul>
          <li>
            <a href=" #">Home</a>
          </li>
          <li>
            <a href=" #">About</a>
          </li>
          <li>
            <a href=" #">Discography</a>
          </li>
          <li>
            <a href=" #">Tours</a>
          </li>
          <li>
            <a href=" #">Videos</a>
          </li>
          <li>
            <a href=" #">Contact</a>
          </li>
        </ul>
      </nav>

      <nav className="menu__social">
        <ul>
          <li>
            <FaFacebookF />
          </li>
          <li>
            <BsTwitter />
          </li>
          <li>
            <BsInstagram />
          </li>
          <li>
            <BsDribbble />
          </li>
        </ul>
      </nav>

      <HeaderBtn />
    </C.Menu>
  );
};
