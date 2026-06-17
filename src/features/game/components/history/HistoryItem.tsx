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
    <Card innerClassName="p-vh-[30px] bg-cream">
      <span className="font-nunito-sans text-vh-[18px] font-extrabold text-brown">
        Задание {number}
      </span>

      <p
        className={`
          block font-nunito-sans text-vh-[20px]! font-extrabold text-dark-brown mt-vh-[8px] leading-none
          ${textClasses[level]}
        `}
      >
        {<HighlightedText value={task.value} />}
      </p>
    </Card>
  );
}
