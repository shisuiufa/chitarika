export type ModalStatus = "open" | "closing";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ModalRegistry {}

export type ModalName = keyof ModalRegistry & string;

export type ModalPropsMap = ModalRegistry;

export type OpenedModal<Name extends ModalName = ModalName> = {
  id: string;
  name: Name;
  status: ModalStatus;
  props: ModalPropsMap[Name];
};
