import Card from "@/shared/ui/Card";
import { LEVELS } from "@/features/game/constants/levels";
import type { ReadingTask } from "@/features/game/types/reading";
import type { Level } from "@/features/game/types/level";
import Button from "@/shared/ui/Button";
import HighlightedText from "@/features/game/components/HighlightedText";
import { ArrowLeft, ArrowRight, Flag } from "lucide-react";
import type { ReactNode } from "react";
import TaskHeader from "@/features/game/components/play/TaskHeader";
import type { Difficulty } from "@/features/game/types/difficulty";

type TaskCardProps = {
  className?: string;
  task: ReadingTask;
  level: Level;
  difficulty: Difficulty;
  current: number;
  total: number;
  isFirstTask: boolean;
  isLastTask: boolean;
  onBack: () => void;
  onNextTask: () => void;
  onComplete: () => void;
  header?: ReactNode;
};

const textClasses: Record<Level, string> = {
  [LEVELS.Syllables]: "text-vh-[250px] font-bold tracking-wide",
  [LEVELS.Words]: "text-vh-[120px] font-semibold",
  [LEVELS.Sentences]: "text-vh-[45px] font-medium leading-relaxed",
  [LEVELS.Texts]: "text-vh-[45px] font-medium leading-relaxed",
};

const taskPatternStyle = {
  backgroundImage:
    "repeating-linear-gradient(0deg, transparent 0, transparent 62px, rgba(224, 208, 178, 0.35) 63px, transparent 64px)",
};

export default function TaskCard({
  className,
  task,
  level,
  difficulty,
  current,
  total,
  isFirstTask,
  isLastTask,
  onBack,
  onComplete,
  onNextTask,
}: TaskCardProps) {
  const buttonText = isLastTask ? "Завершить" : "Далее";
  const ButtonIcon = isLastTask ? Flag : ArrowRight;

  const handleClick = () => {
    if (isLastTask) {
      onComplete();
    } else {
      onNextTask();
    }
  };

  return (
    <Card
      className={className}
      innerClassName="relative flex flex-col items-center gap-vh-[26px] justify-between overflow-hidden p-vh-[30px]"
    >
      <TaskHeader
        level={level}
        difficulty={difficulty}
        current={current}
        total={total}
      />

      <Card
        size="sm"
        className="min-h-0 w-full grow"
        innerClassName="relative flex min-h-0 items-center justify-center overflow-hidden bg-[#FFF8DD] p-vh-[30px]"
      >
        <div
          className="grow pointer-events-none absolute inset-0 opacity-80"
          style={taskPatternStyle}
        />

        <div className={`relative z-100 p-vh-[30px] mx-auto`}>
          <p
            className={`
            wrap-break-word text-center font-nunito-sans text-[#3B2A1A]
            ${textClasses[level]}
          `}
          >
            {<HighlightedText value={task.value} />}
          </p>
        </div>
      </Card>

      <div className="w-[50%] flex items-center justify-center gap-vw-[16px]">
        <Button
          size="lg"
          variant="cream"
          className="uppercase flex-1 justify-center"
          onClick={onBack}
          disabled={isFirstTask}
          icon={<ArrowLeft aria-hidden="true" />}
          iconPosition="left"
        >
          <span className="translate-y-0.5 leading-none">Назад</span>
        </Button>

        <Button
          size="lg"
          className="uppercase flex-1 justify-center"
          onClick={handleClick}
          icon={<ButtonIcon aria-hidden="true" />}
        >
          <span className="translate-y-0.5 leading-none">{buttonText}</span>
        </Button>
      </div>
    </Card>
  );
}
