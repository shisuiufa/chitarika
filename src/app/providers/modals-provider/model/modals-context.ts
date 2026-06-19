import { createContext } from "react";
import type {
  ModalName,
  ModalPropsMap,
  OpenedModal,
} from "@/app/providers/modals-provider/types/modals";

export type OpenModal = <Name extends ModalName>(
  name: Name,
  props: ModalPropsMap[Name],
) => void;

export type ModalContextValue = {
  modals: OpenedModal[];
  open: OpenModal;
  close: () => void;
  remove: (id: string) => void;
  closeAll: () => void;
};

export const ModalContext = createContext<ModalContextValue | null>(null);
