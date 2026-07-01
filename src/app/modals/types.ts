import type { MODALS } from "@/app/modals/modals";
import type { BaseModalProps } from "@/shared/types/modal";
import type { ComponentProps } from "react";

type ModalOwnProps<Name extends keyof typeof MODALS> = Omit<
  ComponentProps<(typeof MODALS)[Name]>,
  keyof BaseModalProps
>;

declare module "@/shared/lib/modals/types" {
  interface ModalRegistry {
    ExitGameModal: ModalOwnProps<"ExitGameModal">;
  }
}
