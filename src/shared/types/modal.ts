export type ModalStatus = "open" | "closing";

export type BaseModalProps = {
  onClose: () => void;
  onExited: () => void;
  status: ModalStatus;
};
