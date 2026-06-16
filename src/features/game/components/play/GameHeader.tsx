import GameProgress from "@/features/game/components/play/game-progress/GameProgress";
import type { Level } from "@/features/game/types/level";
import { LEVELS } from "@/features/game/constants/levels";

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

export default function GameHeader({
  level,
  current = 1,
  total,
}: GameHeaderProps) {
  const levelNumber = LEVEL_NUMBER[level];

  return (
    <div className={`flex justify-center items-center gap-30 w-full px-[15%]`}>
      <div className="flex-1 flex flex-col justify-center items-center">
        <h3 className="text-2xl mb-4">Уровень {levelNumber}</h3>
        <GameProgress className="w-full" current={current} total={total} />
      </div>
    </div>
  );
}
