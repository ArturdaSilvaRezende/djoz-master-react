import React, { createContext, useContext, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
};

type Header = {
  isMenu: boolean;
  setIsMenu: React.Dispatch<React.SetStateAction<boolean>>;
  menuRef?: React.Ref<HTMLElement | null>;
};

const DEFAULT_VALUES: Header = {
  isMenu: false,
  setIsMenu: () => {},
};

export const HeaderContext = createContext<Header>(DEFAULT_VALUES);

export const useHeader = () => {
  return useContext(HeaderContext);
};

export const HeaderProvider = ({ children }: Props) => {
  const menuRef = useRef<HTMLElement | null>(null);
  const [isMenu, setIsMenu] = useState(false);

  return (
    <HeaderContext.Provider value={{ isMenu, setIsMenu, menuRef }}>
      {children}
    </HeaderContext.Provider>
  );
};
