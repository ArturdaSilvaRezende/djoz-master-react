import React, {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  MutableRefObject,
  Dispatch,
  SetStateAction,
} from "react";

type Props = {
  children: React.ReactNode;
};

type Modal<T> = {
  isModal: T;
  setIsModal: Dispatch<SetStateAction<T>>;
  modalRef: T | React.Ref<HTMLDivElement | null>;
  modalVideoRef?: T | React.Ref<HTMLVideoElement | null>;
};

type ValuesContext = {
  isMenu: boolean;
  menuRef?: React.Ref<HTMLElement | null>;
  setIsMenu: Dispatch<SetStateAction<boolean>>;
  showModal: <T extends unknown>(props: Modal<T>) => void;
  closeModal: <T extends unknown>(props: Modal<T>) => void;
};

const DEFAULT_VALUES: ValuesContext = {
  isMenu: false,
  setIsMenu: () => {},
  showModal: () => {},
  closeModal: () => {},
};

const Context = createContext(DEFAULT_VALUES);

export const useGlobalContext = () => {
  return useContext(Context);
};

export const HeaderProvider = ({ children }: Props) => {
  const menuRef = useRef<HTMLElement | null>(null);
  const [isMenu, setIsMenu] = useState(false);

  const showModal = useCallback(<T extends unknown>(props: Modal<T>) => {
    const { isModal, setIsModal, modalRef } = props;

    const setModal = setIsModal as Dispatch<SetStateAction<boolean>>;
    const ref = modalRef as MutableRefObject<HTMLDivElement>;

    if (isModal === false) {
      ref.current.classList.remove("zoomOut");
      ref.current.style.display = "block";
      ref.current.classList.add("zoomIn");
      return setModal(true);
    }
  }, []);

  const closeModal = useCallback(<T extends unknown>(props: Modal<T>) => {
    const { isModal, setIsModal, modalRef, modalVideoRef } = props;

    const ref = modalRef as MutableRefObject<HTMLDivElement>;
    const videoRef = modalVideoRef as MutableRefObject<HTMLVideoElement>;
    const setModal = setIsModal as Dispatch<SetStateAction<boolean>>;

    if (isModal === true) {
      ref.current.classList.remove("zoomIn");
      ref.current.classList.add("zoomOut");

      setTimeout(() => {
        ref.current.style.display = "none";
      }, 1100);

      if (videoRef.current !== null) {
        videoRef.current.pause();
      }

      return setModal(false);
    }
  }, []);

  return (
    <Context.Provider
      value={{
        isMenu,
        menuRef,
        setIsMenu,
        showModal: showModal,
        closeModal: closeModal,
      }}
    >
      {children}
    </Context.Provider>
  );
};
