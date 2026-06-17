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
    "text-6xl md:text-7xl lg:text-9xl xl:text-[10rem] font-bold tracking-wide",
  [LEVELS.Words]:
    "text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold",
  [LEVELS.Sentences]:
    "text-md sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium leading-relaxed",
  [LEVELS.Texts]:
    "text-md sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-medium leading-relaxed",
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
  const isText = level === LEVELS.Texts;
  const ButtonIcon = isLastTask ? Flag : ArrowRight;

  return (
    <Card
      className={className}
      innerClassName="relative flex flex-col items-center gap-3 md:gap-6 justify-between overflow-hidden p-4 md:p-8"
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
          className={`relative z-100 px-4 md:px-8 ${isText ? "mx-auto max-w-5xl" : "mx-auto max-w-full"}`}
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
        size="md"
        className="mx-auto uppercase"
        onClick={onClick}
        icon={<ButtonIcon aria-hidden="true" />}
      >
        <span className="translate-y-0.5 leading-none">{btnText}</span>
      </Button>
    </Card>
  );
}
