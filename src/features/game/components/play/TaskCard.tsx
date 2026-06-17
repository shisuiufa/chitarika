import Card from "@/shared/ui/Card";
import { LEVELS } from "@/features/game/constants/levels";
import type { ReadingTask } from "@/features/game/types/reading";
import type { Level } from "@/features/game/types/level";
import Button from "@/shared/ui/Button";
import HighlightedText from "@/features/game/components/HighlightedText";
import { ArrowRight, Flag } from "lucide-react";

type TaskCardProps = {
  className?: string;
  task: ReadingTask;
  level: Level;
  onClick: () => void;
  btnText: string;
  isLastTask: boolean;
};

const textClasses: Record<Level, string> = {
  [LEVELS.Syllables]:
    "text-vh-[250px] font-bold tracking-wide",
  [LEVELS.Words]:
    "text-vh-[120px] font-semibold",
  [LEVELS.Sentences]:
    "text-vh-[45px] font-medium leading-relaxed",
  [LEVELS.Texts]:
    "text-vh-[45px] font-medium leading-relaxed",
};

const taskPatternStyle = {
  backgroundImage:
    "repeating-linear-gradient(0deg, transparent 0, transparent 62px, rgba(224, 208, 178, 0.35) 63px, transparent 64px)",
};

export default function TaskCard({
  className,
  task,
  level,
  onClick,
  btnText,
  isLastTask = false,
}: TaskCardProps) {
  const ButtonIcon = isLastTask ? Flag : ArrowRight;

  return (
    <Card
      className={className}
      innerClassName="relative flex flex-col items-center gap-vh-[30px] justify-between overflow-hidden p-vh-[35px]"
    >
      <div className="grow relative w-full h-full flex justify-center items-center">
        <div
          className="grow pointer-events-none absolute inset-0 opacity-80"
          style={taskPatternStyle}
        />

        <div
          className="
          pointer-events-none absolute inset-0 rounded-4xl
          border-2 border-dashed border-sand/60
        "
        />

        <div
          className={`relative z-100 p-vh-[30px] mx-auto`}
        >
          <p
            className={`
            wrap-break-word text-center font-nunito-sans text-[#3B2A1A]
            ${textClasses[level]}
          `}
          >
            {<HighlightedText value={task.value} />}
          </p>
        </div>
      </div>

      <Button
        size="lg"
        className="mx-auto uppercase"
        onClick={onClick}
        icon={<ButtonIcon aria-hidden="true" />}
      >
        <span className="translate-y-0.5 leading-none">{btnText}</span>
      </Button>
    </Card>
  );
}
