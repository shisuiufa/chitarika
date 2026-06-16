import Card from "@/shared/ui/Card";
import { LEVELS } from "@/features/game/constants/levels";

import type { ReadingTask } from "@/features/game/types/reading";
import type { Level } from "@/features/game/types/level";
import ArrowRightIcon from "@/shared/icons/ArrowRightIcon";
import Button from "@/shared/ui/Button";

type TaskCardProps = {
  className?: string;
  task: ReadingTask;
  level: Level;
  onClick: () => void;
  btnText: string;
};

const textClasses: Record<Level, string> = {
  [LEVELS.Syllables]: "text-9xl lg:text-[10rem] font-bold tracking-wide",
  [LEVELS.Words]: "text-7xl lg:text-9xl font-semibold",
  [LEVELS.Sentences]: "text-3xl lg:text-5xl font-medium leading-relaxed",
  [LEVELS.Texts]: "text-2xl lg:text-4xl font-medium leading-relaxed",
};

const taskPatternStyle = {
  backgroundImage:
    "repeating-linear-gradient(0deg, transparent 0, transparent 62px, rgba(224, 208, 178, 0.35) 63px, transparent 64px)",
};

function renderHighlightedText(value: string) {
  return value.split(/(\[[^\]]+])/g).map((part, index) => {
    const isHighlighted = part.startsWith("[") && part.endsWith("]");

    if (!isHighlighted) {
      return part;
    }

    return (
      <mark
        key={index}
        className="
          box-decoration-clone rounded-xl bg-yellow px-2 py-1
          text-[#3B2A1A] shadow-[0_4px_0_#FD9D1A]
        "
      >
        {part.slice(1, -1)}
      </mark>
    );
  });
}

export default function TaskCard({
  className,
  task,
  level,
  onClick,
  btnText,
}: TaskCardProps) {
  const isText = level === LEVELS.Texts;

  return (
    <Card
      className={className}
      innerClassName="
        relative flex flex-col items-center justify-center overflow-hidden
        p-8 lg:p-14
      "
    >
      <div
        className="grow pointer-events-none absolute inset-0 opacity-80"
        style={taskPatternStyle}
      />

      <div
        className="
          pointer-events-none absolute inset-5 rounded-4xl
          border-2 border-dashed border-sand/60
        "
      />

      <div className="relative h-full z-10 flex flex-col gap-2 justify-center items-center">
        <div className="grow flex justify-center items-center">
          <div
            className={` ${isText ? "mx-auto max-w-5xl" : "mx-auto max-w-full"}`}
          >
            <p
              className={`
            wrap-break-word text-center font-nunito-sans text-[#3B2A1A]
            drop-shadow-[0_6px_0_rgba(224,208,178,0.45)]
            ${textClasses[level]}
          `}
            >
              {renderHighlightedText(task.value)}
            </p>
          </div>
        </div>

        <Button
          size="md"
          className="mx-auto min-w-52 uppercase"
          onClick={onClick}
        >
          <span className="translate-y-0.5 leading-none">{btnText}</span>
          <ArrowRightIcon />
        </Button>
      </div>
    </Card>
  );
}
