import Card from "@/shared/ui/Card";
import { ChartNoAxesColumnIncreasing } from "lucide-react";
import type { Difficulty } from "../../../types/difficulty";
import DifficultySelector from "./DifficultySelector";

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
          className="size-vh-[25px] text-gold-brown"
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
