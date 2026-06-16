import LevelOption from "@/features/game/components/settings/level-setting/LevelOption";
import { LEVEL_OPTIONS } from "@/features/game/constants/levels";
import type { Level } from "@/features/game/types/level";

type LevelSelectorProps = {
  selectedLevel: Level;
  onSelectLevel: (level: Level) => void;
};

export default function LevelSelector({
  selectedLevel,
  onSelectLevel,
}: LevelSelectorProps) {
  const levelsList = LEVEL_OPTIONS.map((level) => (
    <LevelOption
      key={level.id}
      level={level}
      isSelected={level.id === selectedLevel}
      onClick={() => onSelectLevel(level.id)}
    />
  ));

  return <div className="grid grid-cols-4 gap-4">{levelsList}</div>;
}
