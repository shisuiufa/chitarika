import DifficultySelector from "@/features/game/components/settings/difficulty-setting/DifficultySelector";
import Card from "@/shared/ui/Card";
import type { Difficulty } from "@/features/game/types/difficulty";
import { ChartNoAxesColumnIncreasing } from "lucide-react";

type DifficultySettingProps = {
  className?: string;
  selectedDifficulty: Difficulty;
  onSelectDifficulty: (difficulty: Difficulty) => void;
};

export default function DifficultySetting({
  className,
  selectedDifficulty,
  onSelectDifficulty,
}: DifficultySettingProps) {
  return (
    <Card innerClassName="p-vh-[35px] bg-vanilla" className={className}>
      <div className="mb-vh-[20px] flex items-center gap-vw-[10px]">
        <ChartNoAxesColumnIncreasing
          className="size-vh-[30px] text-gold-brown"
          strokeWidth={2.5}
          aria-hidden="true"
        />

        <h2 className="text-vh-[25px] leading-none">Сложность</h2>
      </div>
      <DifficultySelector
        selectedDifficulty={selectedDifficulty}
        onSelectDifficulty={onSelectDifficulty}
      />
    </Card>
  );
}
