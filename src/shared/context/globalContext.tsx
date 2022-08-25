import React, { createContext, useContext, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
};

type ValuesContext = {
  isMenu: boolean;
  menuRef?: React.Ref<HTMLElement | null>;
  setIsMenu: React.Dispatch<React.SetStateAction<boolean>>;

  isModal: boolean;
  modalRef?: React.Ref<HTMLDivElement | null>;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const DEFAULT_VALUES: ValuesContext = {
  isMenu: false,
  isModal: false,
  setIsMenu: () => {},
  setIsModal: () => {},
};

const Context = createContext(DEFAULT_VALUES);

export const useGlobalContext = () => {
  return useContext(Context);
};

export const HeaderProvider = ({ children }: Props) => {
  const menuRef = useRef<HTMLElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [isMenu, setIsMenu] = useState(false);
  const [isModal, setIsModal] = useState(false);

  return (
    <Context.Provider
      value={{ isMenu, menuRef, setIsMenu, isModal, modalRef, setIsModal }}
    >
      {children}
    </Context.Provider>
  );
};
