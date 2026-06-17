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
    <div
      className={`border-t-2 border-dashed border-sand/70 pt-3 md:pt-6 ${className}`}
    >
      <div className="mx-auto flex flex-col gap-3 md:gap-7 w-full lg:w-[70%] xl:w-[50%]">
        <Button
          size="lg"
          className="relative z-100 w-full uppercase"
          onClick={onRestart}
          icon={<RotateCcw aria-hidden="true" />}
          iconPosition="left"
        >
          <span className="translate-y-0.5 leading-none">Повторить</span>
        </Button>

        <div className="relative z-101 flex gap-6 w-full">
          <Button
            onClick={onOpenSettings}
            size="md"
            variant="secondary"
            className="uppercase flex-1"
            icon={<Settings aria-hidden="true" />}
            iconPosition="left"
          >
            Настройки
          </Button>

          <Button
            size="md"
            variant="secondary"
            className="uppercase flex-1"
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
