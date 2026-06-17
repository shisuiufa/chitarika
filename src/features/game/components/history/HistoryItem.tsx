import type { ReadingTask } from "@/features/game/types/reading";
import type { Level } from "@/features/game/types/level";

import { LEVELS } from "@/features/game/constants/levels";
import Card from "@/shared/ui/Card";
import HighlightedText from "@/features/game/components/HighlightedText";

type GameHistoryItemProps = {
  task: ReadingTask;
  number: number;
  level: Level;
};

const textClasses: Record<Level, string> = {
  [LEVELS.Syllables]: "text-4xl sm:text-5xl font-extrabold tracking-wide",

  [LEVELS.Words]: "text-xl lg:text-2xl font-extrabold",

  [LEVELS.Sentences]: "text-lg md:text-xl font-bold leading-relaxed",

  [LEVELS.Texts]: "text-md md:text-lg font-bold leading-relaxed",
};

export default function HistoryItem({
  task,
  number,
  level,
}: GameHistoryItemProps) {
  return (
    <Card innerClassName="px-5 py-3 md:px-7 md:py-4 bg-cream">
      <span className="font-nunito-sans text-sm font-extrabold uppercase text-[#7B6C4E]">
        Задание {number}
      </span>

      <p
        className={`
          wrap-break-word font-nunito-sans text-[#3B2A1A]
          ${textClasses[level]}
        `}
      >
        {<HighlightedText value={task.value} />}
      </p>
    </Card>
  );
}
