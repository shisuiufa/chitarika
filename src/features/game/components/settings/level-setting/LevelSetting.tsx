import LevelIcon from "@/shared/icons/LevelIcon";
import Card from "@/shared/ui/Card";
import type { Level } from "../../../types/level";
import LevelSelector from "./LevelSelector";

type LevelSettingProps = {
  selectedLevel: Level;
  className?: string;
  onSelectLevel: (level: Level) => void;
};

export default function LevelSetting({
  selectedLevel,
  className,
  onSelectLevel,
}: LevelSettingProps) {
  return (
    <Card
      className={className}
      innerClassName="p-vh-[30px] bg-vanilla flex flex-col"
    >
      <h1 className="flex items-center text-brown gap-vw-[10px] text-vh-[25px] mb-vh-[20px] leading-none">
        <LevelIcon className="size-vh-[25px]" /> <span>Уровень</span>
      </h1>

      <LevelSelector
        selectedLevel={selectedLevel}
        onSelectLevel={onSelectLevel}
      />
    </Card>
  );
}
