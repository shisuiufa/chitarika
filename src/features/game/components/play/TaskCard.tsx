import Card from "@/shared/ui/Card";
import { LEVELS } from "@/features/game/constants/levels";

import type { ReadingTask } from "@/features/game/types/reading";
import type { Level } from "@/features/game/types/level";

type TaskCardProps = {
  className?: string;
  task: ReadingTask;
  level: Level;
};

const textClasses: Record<Level, string> = {
  [LEVELS.Syllables]: "text-9xl font-bold tracking-wide",
  [LEVELS.Words]: "text-6xl lg:text-8xl font-semibold",
  [LEVELS.Sentences]: "text-3xl lg:text-5xl font-medium leading-relaxed",
  [LEVELS.Texts]: "text-2xl lg:text-4xl font-medium leading-relaxed",
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
        className="box-decoration-clone rounded-md bg-yellow px-2 py-1 text-[#3B2A1A]"
      >
        {part.slice(1, -1)}
      </mark>
    );
  });
}

export default function TaskCard({ className, task, level }: TaskCardProps) {
  const isText = level === LEVELS.Texts;

  return (
    <Card
      className={className}
      innerClassName="relative flex items-center justify-center p-5 lg:p-10"
    >
      <div
        className={`min-w-0 w-full ${isText ? "mx-auto max-w-5xl" : "mx-auto"}`}
      >
        <p
          className={`
            text-center font-nunito-sans text-[#3B2A1A] 
            ${textClasses[level]}
          `}
        >
          {renderHighlightedText(task.value)}
        </p>
      </div>
    </Card>
  );
}
