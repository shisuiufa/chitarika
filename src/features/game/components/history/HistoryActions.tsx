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
    <div className={`flex flex-wrap gap-vh-[30px] ${className}`}>
      <Button
        size="lg"
        variant="secondary"
        className="flex-1 uppercase justify-center"
        onClick={onBackToResult}
        icon={<ArrowLeft aria-hidden="true" />}
        iconPosition="left"
      >
        Результат
      </Button>

      <Button
        size="lg"
        className="flex-1 uppercase justify-center"
        onClick={onRestart}
        icon={<RotateCcw aria-hidden="true" />}
        iconPosition="left"
      >
        ПОВТОРИТЬ
      </Button>
    </div>
  );
}
