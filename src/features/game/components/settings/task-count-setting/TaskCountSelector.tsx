import CircleButton from "@/shared/ui/CircleButton";
import { getTaskCountLabel } from "@/features/game/model/reading/get-task-count-label";
import { Minus, Plus } from "lucide-react";
import Card from "@/shared/ui/Card";
import TaskCountSteps from "@/features/game/components/settings/task-count-setting/TaskCountSteps";

type AnswerCountSelectorProps = {
  className?: string;
  selectedCount: number;
  onSelectCountAnswers: (answerCount: number) => void;
};

const MIN_TASK_COUNT = 1;
const MAX_TASK_COUNT = 10;

export default function TaskCountSelector({
  className = "",
  selectedCount,
  onSelectCountAnswers,
}: AnswerCountSelectorProps) {
  const handleDecrease = () => {
    if (selectedCount <= MIN_TASK_COUNT) return;

    onSelectCountAnswers(selectedCount - 1);
  };

  const handleIncrease = () => {
    if (selectedCount >= MAX_TASK_COUNT) return;

    onSelectCountAnswers(selectedCount + 1);
  };

  return (
    <Card className={`${className} pb-vh-[0px]`} innerClassName="border-none flex flex-col justify-center  bg-cream p-vh-[30px] shadow-[0_clamp(3px,0.5556vh,6px)_0_#E5D9BD]">
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-vw-[18px]">
        <CircleButton
          size="lg"
          onClick={handleDecrease}
          disabled={selectedCount <= MIN_TASK_COUNT}
          aria-label="Уменьшить количество заданий"
        >
          <Minus className="size-vh-[20px]" aria-hidden="true" />
        </CircleButton>

        <div className="text-center leading-none">
          <div className="text-vh-[52px] font-bold text-brown">
            {selectedCount}
          </div>
          <div className="mt-vh-[6px] text-vh-[17px] font-extrabold text-gold-brown">
            {getTaskCountLabel(selectedCount)}
          </div>
        </div>

        <CircleButton
          size="lg"
          onClick={handleIncrease}
          disabled={selectedCount >= MAX_TASK_COUNT}
          aria-label="Увеличить количество заданий"
        >
          <Plus className="size-vh-[20px]" aria-hidden="true" />
        </CircleButton>
      </div>

      <TaskCountSteps
        max={MAX_TASK_COUNT}
        value={selectedCount}
        className="mt-vh-[35px]"
      />
    </Card>
  );
}
