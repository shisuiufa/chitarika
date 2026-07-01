import { useModals } from "@/shared/lib/modals/hooks/useModals";
import { MODALS } from "./modals";

export function ModalRoot() {
  const { modals, remove, close } = useModals();

  return modals.map(({ id, name, status, props }) => {
    const Component = MODALS[name];

    return (
      <Component
        key={id}
        {...props}
        status={status}
        onClose={close}
        onExited={() => remove(id)}
      />
    );
  });
}
