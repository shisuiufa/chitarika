import LevelIcon from "@/shared/icons/LevelIcon";
import type { Level } from "@/features/game/types/level";
import LevelSelector from "@/features/game/components/settings/level-setting/LevelSelector";
import Card from "@/shared/ui/Card";

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
    <Card
      className={`${className}`}
      innerClassName="p-5 sm:p-6 bg-vanilla flex flex-col"
    >
      <h1 className="flex items-center text-brown font-bold mb-4 md:mb-5 text-lg md:text-2xl gap-2">
        <LevelIcon className="size-5 md:size-8" /> <span>Уровень</span>
      </h1>
      <LevelSelector
        selectedLevel={selectedLevel}
        onSelectLevel={onSelectLevel}
      />
    </Card>
  );
}
