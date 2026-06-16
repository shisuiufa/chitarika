import LevelIcon from "@/shared/icons/LevelIcon";
import type { Level } from "@/features/game/types/level";
import LevelSelector from "@/features/game/components/settings/level-setting/LevelSelector";

type LevelSettingProps = {
  selectedLevel: Level;
  className?: string;
  onSelectLevel: (level: Level) => void;
};

export default function LevelSetting({
  selectedLevel,
  className = "",
  onSelectLevel,
}: LevelSettingProps) {
  return (
    <div className={`${className}`}>
      <h1 className="flex gap-2 items-center mb-5 text-brown font-bold text-2xl">
        <LevelIcon /> <span>Уровень</span>
      </h1>
      <LevelSelector
        selectedLevel={selectedLevel}
        onSelectLevel={onSelectLevel}
      />
    </div>
  );
}
