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

export default function PlayHeader({
  level,
  current = 1,
  total,
}: GameHeaderProps) {
  const levelNumber = LEVEL_NUMBER[level];

  return (
    <Card innerClassName="p-vh-[30px]">
      <div className="mb-vh-[15px] flex items-center justify-between">
        <h3 className="text-vh-[25px]">Уровень {levelNumber}</h3>
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
