import { useContext } from "react";
import { ModalContext } from "../modals-context";

export function useModals() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModals must be used inside ModalsProvider");
  }

  return context;
}
