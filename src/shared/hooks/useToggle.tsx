import { useContext } from "react";
import { ToggleContext } from "../context/ToggleContext";

export const useToggle = () => {
  const context = useContext(ToggleContext);

  if (!context) {
    throw new Error("useToggle deve ser usado dentro de um ToggleProvider");
  }

  return context;
};
