import { type ReactNode, useCallback, useMemo, useState } from "react";
import { ModalContext, type OpenModal } from "./modals-context";
import type { ModalName, ModalPropsMap, OpenedModal } from "./types";

type ModalsProviderProps = {
  children: ReactNode;
};

function createOpenedModal<Name extends ModalName>(
  name: Name,
  props: ModalPropsMap[Name],
): OpenedModal<Name> {
  return {
    id: crypto.randomUUID(),
    name,
    status: "open",
    props,
  };
}

export function ModalsProvider({ children }: ModalsProviderProps) {
  const [modals, setModals] = useState<OpenedModal[]>([]);

  const open: OpenModal = useCallback((name, props) => {
    setModals((currentModals) => [
      ...currentModals,
      createOpenedModal(name, props),
    ]);
  }, []);

  const close = useCallback(() => {
    setModals((currentModals) =>
      currentModals.map((modal, index) =>
        index === currentModals.length - 1
          ? { ...modal, status: "closing" }
          : modal,
      ),
    );
  }, []);

  const remove = useCallback((id: string) => {
    setModals((currentModals) =>
      currentModals.filter((modal) => modal.id !== id),
    );
  }, []);

  const closeAll = useCallback(() => {
    setModals((currentModals) =>
      currentModals.map((modal) => ({
        ...modal,
        status: "closing",
      })),
    );
  }, []);

  const value = useMemo(
    () => ({
      modals,
      open,
      close,
      remove,
      closeAll,
    }),
    [close, remove, closeAll, modals, open],
  );

  return <ModalContext value={value}>{children}</ModalContext>;
}
