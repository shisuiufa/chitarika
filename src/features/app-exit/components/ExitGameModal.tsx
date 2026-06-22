import Modal from "@/shared/ui/Modal";
import Card from "@/shared/ui/Card";
import type { BaseModalProps } from "@/shared/types/modal";
import Button from "@/shared/ui/Button";
import { quitApp } from "@/shared/lib/electron/quit-app";

export default function ExitGameModal({ onClose, ...props }: BaseModalProps) {
  const handleExit = async () => {
    await quitApp();
  };

  return (
    <Modal onClose={onClose} {...props}>
      <Card innerClassName="p-vh-[50px]">
        <h1 className="mb-vh-[15px] text-center text-vh-[40px] leading-tight">
          Выйти из приложения?
        </h1>

        <p className="mb-vh-[50px] text-center text-vh-[25px] leading-tight">
          Несохранённый прогресс может быть потерян.
        </p>

        <div className="flex gap-vw-[20px]">
          <Button
            size="xl"
            variant="secondary"
            className="w-full"
            onClick={onClose}
          >
            Нет
          </Button>

          <Button size="xl" className="w-full" onClick={handleExit}>
            Да
          </Button>
        </div>
      </Card>
    </Modal>
  );
}
