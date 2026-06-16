import type { Level } from "@/features/game/types/level";
import { LEVELS } from "@/features/game/constants/levels";
import ProgressBar from "@/shared/ui/ProgressBar";

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

export default function GameHeader({
  level,
  current = 1,
  total,
}: GameHeaderProps) {
  const levelNumber = LEVEL_NUMBER[level];
  const levelLabel = LEVEL_LABEL[level];

  return (
    <div
      className="
        rounded-4xl bg-[#FFF3D6] p-5
        shadow-[0_8px_0_#E0D0B2,0_14px_24px_rgba(118,90,0,0.08)]
        ring-2 ring-sand
      "
    >
      <div className="mb-4 flex items-center justify-between gap-5">
        <div>
          <h3 className="text-2xl">Уровень {levelNumber}</h3>
          <p className="font-nunito-sans text-base font-bold text-[#7B6C4E]">
            {levelLabel}
          </p>
        </div>

        <div
          className="
            flex shrink-0 items-center justify-center rounded-3xl px-4 py-2
            bg-yellow font-nunito-sans text-2xl font-black text-[#7A4D00]
            shadow-[0_5px_0_#FD9D1A]
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
    </div>
  );
}
