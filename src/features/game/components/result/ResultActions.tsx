import Button from "@/shared/ui/Button";
import { History, RotateCcw, Settings } from "lucide-react";

type ResultActionsProps = {
  className?: string;
  onRestart: () => void;
  onOpenSettings: () => void;
  onOpenHistory: () => void;
};

export default function ResultActions({
  className = "",
  onRestart,
  onOpenSettings,
  onOpenHistory,
}: ResultActionsProps) {
  return (
    <div className={`${className}`}>
      <div className="mx-auto flex flex-col gap-vh-[35px] w-full lg:w-[50%]">
        <Button
          size="lg"
          className="relative z-100 w-full uppercase flex items-center justify-center"
          onClick={onRestart}
          icon={<RotateCcw aria-hidden="true" />}
          iconPosition="left"
        >
          <span className="translate-y-0.5 leading-none">Повторить</span>
        </Button>

        <div className="relative z-101 flex flex-wrap gap-vh-[35px] w-full">
          <Button
            onClick={onOpenSettings}
            size="lg"
            variant="secondary"
            className="uppercase flex-1 flex items-center justify-center"
            icon={<Settings aria-hidden="true" />}
            iconPosition="left"
          >
            Настройки
          </Button>

          <Button
            size="lg"
            variant="secondary"
            className="uppercase flex-1 flex items-center justify-center"
            onClick={onOpenHistory}
            icon={<History aria-hidden="true" />}
            iconPosition="left"
          >
            История
          </Button>
        </div>
      </div>
    </div>
  );
}
