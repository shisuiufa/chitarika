import DifficultySelector from "@/features/game/components/settings/difficulty-setting/DifficultySelector";
import Card from "@/shared/ui/Card";
import type { Difficulty } from "@/features/game/types/difficulty";

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
    <Card innerClassName="p-6 bg-vanilla" className={className}>
      <h1 className="text-2xl mb-6">Сложность</h1>

      <DifficultySelector
        selectedDifficulty={selectedDifficulty}
        onSelectDifficulty={onSelectDifficulty}
      />
    </Card>
  );
}
