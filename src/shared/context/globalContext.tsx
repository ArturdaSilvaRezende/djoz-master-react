import React, { createContext, useContext, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
};

type ValuesContext = {
  isMenu: boolean;
  menuRef?: React.Ref<HTMLElement | null>;
  setIsMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const DEFAULT_VALUES: ValuesContext = {
  isMenu: false,
  setIsMenu: () => {},
};

const Context = createContext(DEFAULT_VALUES);

export const useGlobalContext = () => {
  return useContext(Context);
};

export const HeaderProvider = ({ children }: Props) => {
  const menuRef = useRef<HTMLElement | null>(null);
  const [isMenu, setIsMenu] = useState(false);

  return (
    <Context.Provider value={{ isMenu, menuRef, setIsMenu }}>
      {children}
    </Context.Provider>
  );
};
