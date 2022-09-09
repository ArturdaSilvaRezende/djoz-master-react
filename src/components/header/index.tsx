import { useEffect, useRef } from "react";
import * as C from "./style";
import { Menu } from "./headerMenu";
import "./animation.css";

export const Header = () => {
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const scrollTopHeader = () => {
      if (
        document.body.scrollTop > 330 ||
        document.documentElement.scrollTop > 330
      ) {
        if (headerRef.current) {
          headerRef.current.style.position = "fixed";
          headerRef.current.classList.add("fadeIn");
          headerRef.current.style.backgroundColor = "#290849";
        }
      } else {
        if (headerRef.current) {
          headerRef.current.classList.remove("fadeIn");
          headerRef.current.style.position = "absolute";
          headerRef.current.style.backgroundColor = "rgba(42, 1, 74, 0.5)";
        }
      }
    };

    window.addEventListener("scroll", () => {
      scrollTopHeader();
    });
    return window.removeEventListener("scroll", () => {
      scrollTopHeader();
    });
  }, [headerRef]);

  return (
    <C.Header ref={headerRef} background="rgba(42, 1, 74, 0.5)">
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
