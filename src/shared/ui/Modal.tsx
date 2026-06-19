import { createPortal } from "react-dom";
import { type ReactNode, useEffect, useEffectEvent } from "react";
import type { BaseModalProps } from "@/shared/types/modal";

type ModalProps = BaseModalProps & {
  children: ReactNode;
};

export default function Modal({
  onClose,
  onExited,
  status,
  children,
}: ModalProps) {
  const handleKeyDown = useEffectEvent((event: KeyboardEvent) => {
    if (event.key !== "Escape" || event.repeat) {
      return;
    }

    onClose();
  });

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return createPortal(
    <div
      className={`
      fixed inset-0 z-50 flex items-center justify-center p-vh-[20px] bg-dark-brown/50
      ${status === "open" ? "animate-modal-backdrop-in" : "animate-modal-backdrop-out"}
    `}
      onMouseDown={onClose}
    >
      <div
        className={`${
          status === "open"
            ? "animate-modal-content-in"
            : "animate-modal-content-out"
        }`}
        onMouseDown={(event) => event.stopPropagation()}
        onAnimationEnd={(event) => {
          if (event.currentTarget !== event.target) {
            return;
          }

          if (status === "closing") {
            onExited();
          }
        }}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
}
