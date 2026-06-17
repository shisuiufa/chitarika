import { type Difficulty } from "@/features/game/types/difficulty";
import { DIFFICULTY_OPTIONS } from "@/features/game/constants/difficulties";
import DifficultyOption from "@/features/game/components/settings/difficulty-setting/DifficultyOption";

type DifficultySelectorProps = {
  selectedDifficulty: Difficulty;
  onSelectDifficulty: (difficulty: Difficulty) => void;
};

export default function DifficultySelector({
  selectedDifficulty,
  onSelectDifficulty,
}: DifficultySelectorProps) {
  const difficultiesList = DIFFICULTY_OPTIONS.map((difficulty) => (
    <DifficultyOption
      key={difficulty.id}
      option={difficulty}
      isSelected={difficulty.id === selectedDifficulty}
      onClick={onSelectDifficulty}
    />
  ));

  return <div className="flex flex-col gap-vh-[15px]">{difficultiesList}</div>;
}
