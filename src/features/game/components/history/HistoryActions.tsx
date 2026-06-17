import Button from "@/shared/ui/Button";
import { ArrowLeft, RotateCcw } from "lucide-react";

type HistoryActions = {
  className?: string;
  onBackToResult: () => void;
  onRestart: () => void;
};

export default function GameHistoryActions({
  className = "",
  onBackToResult,
  onRestart,
}: HistoryActions) {
  return (
    <div className={`grid gap-4 ${className}`}>
      <div className="flex gap-5">
        <Button
          size="lg"
          variant="secondary"
          className="w-full uppercase"
          onClick={onBackToResult}
          icon={<ArrowLeft aria-hidden="true" />}
          iconPosition="left"
        >
          Результат
        </Button>

        <Button
          size="lg"
          className="w-full uppercase"
          onClick={onRestart}
          icon={<RotateCcw aria-hidden="true" />}
          iconPosition="left"
        >
          ПОВТОРИТЬ
        </Button>
      </div>
    </div>
  );
}
