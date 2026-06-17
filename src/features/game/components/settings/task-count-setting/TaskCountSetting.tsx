import Card from "@/shared/ui/Card";
import TaskCountSelector from "@/features/game/components/settings/task-count-setting/TaskCountSelector";
import { Blocks  } from "lucide-react";

type AnswerCountSettingProps = {
  className?: string;
  selectedCount: number;
  onSelectCountAnswers: (answerCount: number) => void;
};

export default function TaskCountSetting({
  className,
  selectedCount,
  onSelectCountAnswers,
}: AnswerCountSettingProps) {
  return (
    <Card
      className={`${className}`}
      innerClassName="p-vh-[35px] bg-vanilla flex flex-col"
    >
      <div className="mb-vh-[20px] flex items-center gap-vw-[10px]">
        <Blocks
          className="size-vh-[30px] text-gold-brown"
          strokeWidth={2.5}
        />

        <h1 className="text-vh-[25px] leading-none">
          Количество заданий
        </h1>
      </div>

      <TaskCountSelector
        className="flex-1"
        selectedCount={selectedCount}
        onSelectCountAnswers={onSelectCountAnswers}
      />
    </Card>
  );
}
