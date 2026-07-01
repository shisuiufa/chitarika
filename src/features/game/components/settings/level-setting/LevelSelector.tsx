import { LEVEL_OPTIONS } from "../../../constants/levels";
import type { Level } from "../../../types/level";
import LevelOption from "./LevelOption";

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

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-vw-[20px] h-full">
      {levelsList}
    </div>
  );
}
