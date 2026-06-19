import { useModals } from "@/app/providers/modals-provider/hooks/useModals";
import { MODALS } from "@/app/providers/modals-provider/constants/modals";

export default function ModalRoot() {
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
