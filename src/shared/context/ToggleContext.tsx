import React, { createContext, Dispatch, useReducer } from "react";

type Props = {
  children: React.ReactNode;
};

type ToggleState = {
  isMenuHeader: boolean;
  isModalHero: boolean;
  isModalServices: boolean;
  isModalAbout: boolean;
};

const initialState: ToggleState = {
  isMenuHeader: false,
  isModalHero: false,
  isModalServices: false,
  isModalAbout: false,
};

type ToggleAction =
  | { type: "TOGGLE_HEADER" }
  | { type: "RESIZE_HEADER" }
  | { type: "TOGGLE_HERO_MODAL" }
  | { type: "TOGGLE_SERVICES_MODAL" }
  | { type: "TOGGLE_ABOUT_MODAL" };

type ToggleDispatch = Dispatch<ToggleAction>;

export const ToggleContext = createContext<
  { state: ToggleState; dispatch: ToggleDispatch } | undefined
>(undefined);

const toggleReducer = (
  state: ToggleState,
  action: ToggleAction
): ToggleState => {
  switch (action.type) {
    case "TOGGLE_HEADER":
      return { ...state, isMenuHeader: !state.isMenuHeader };
    case "RESIZE_HEADER":
      return { ...state, isMenuHeader: window.innerWidth > 767 };
    case "TOGGLE_HERO_MODAL":
      return { ...state, isModalHero: !state.isModalHero };
    case "TOGGLE_SERVICES_MODAL":
      return { ...state, isModalServices: !state.isModalServices };
    case "TOGGLE_ABOUT_MODAL":
      return { ...state, isModalAbout: !state.isModalAbout };
    default:
      return state;
  }
};

const ToggleProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(toggleReducer, initialState);

  return (
    <ToggleContext.Provider value={{ state, dispatch }}>
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleProvider;
