import type { MODALS } from "@/app/providers/modals-provider/constants/modals";
import type { ComponentProps } from "react";
import type { BaseModalProps } from "@/shared/types/modal";

export type ModalName = keyof typeof MODALS;

export type ModalStatus = "open" | "closing";

type ModalOwnProps<Name extends ModalName> = Omit<
  ComponentProps<(typeof MODALS)[Name]>,
  keyof BaseModalProps
>;

export type ModalPropsMap = {
  [Name in ModalName]: ModalOwnProps<Name>;
};

export type OpenedModal<Name extends ModalName = ModalName> = {
  id: string;
  name: Name;
  status: ModalStatus;
  props: ModalPropsMap[Name];
};
