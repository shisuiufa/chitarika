import type { Level } from "@/features/game/types/level";
import { LEVELS } from "@/features/game/constants/levels";
import ProgressBar from "@/shared/ui/ProgressBar";
import Card from "@/shared/ui/Card";

type GameHeaderProps = {
  level: Level;
  current: number;
  total: number;
};

const LEVEL_NUMBER: Record<Level, number> = {
  [LEVELS.Syllables]: 1,
  [LEVELS.Words]: 2,
  [LEVELS.Sentences]: 3,
  [LEVELS.Texts]: 4,
};

const LEVEL_LABEL: Record<Level, string> = {
  [LEVELS.Syllables]: "Слоги",
  [LEVELS.Words]: "Слова",
  [LEVELS.Sentences]: "Предложения",
  [LEVELS.Texts]: "Тексты",
};

export default function PlayHeader({
  level,
  current = 1,
  total,
}: GameHeaderProps) {
  const levelNumber = LEVEL_NUMBER[level];
  const levelLabel = LEVEL_LABEL[level];

  return (
    <Card innerClassName="p-4 md:p-8">
      <div className="mb-2 md:mb-4 flex items-center justify-between gap-5">
        <div>
          <h3 className="text-lg md:text-2xl">Уровень {levelNumber}</h3>
          <p className="font-nunito-sans text-sm md:text-base font-bold text-[#7B6C4E]">
            {levelLabel}
          </p>
        </div>

        <div
          className="
            flex shrink-0 items-center justify-center rounded-2xl md:rounded-3xl px-2 md:px-4 py-1 md:py-2
            bg-yellow font-nunito-sans text-lg md:text-2xl font-black text-[#7A4D00]
            shadow-[0_3px_0_#FD9D1A] md:shadow-[0_5px_0_#FD9D1A]
          "
        >
          {current}/{total}
        </div>
      </div>

      <ProgressBar
        className="w-full"
        value={current}
        max={total}
        size="md"
        needProgressAnimated={false}
        showStarMarker={true}
      />
    </Card>
  );
}
