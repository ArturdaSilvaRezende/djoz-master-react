import { useEffect, useRef } from "react";
import * as C from "./style";
import { NavLink } from "react-router-dom";
import { Menu } from "./headerMenu";
import "./animation.css";

type HeaderBg = {
  background: string;
};

export const Header = (props: HeaderBg) => {
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
          headerRef.current.style.backgroundColor = `${props.background}`;
        }
      }
    };

    window.addEventListener("scroll", () => {
      scrollTopHeader();
    });
    return window.removeEventListener("scroll", () => {
      scrollTopHeader();
    });
  }, [headerRef, props]);

  return (
    <C.Header
      ref={headerRef}
      style={{ backgroundColor: `${props.background}` }}
    >
      <C.Container>
        <NavLink to="/" className={() => "header__logo"}>
          <span>DJ</span>
          <span>OZ</span>
        </NavLink>
        <Menu />
      </C.Container>
    </C.Header>
  );
};
