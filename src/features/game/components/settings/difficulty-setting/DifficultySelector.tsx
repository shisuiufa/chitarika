import { DIFFICULTY_OPTIONS } from "../../../constants/difficulties";
import { type Difficulty } from "../../../types/difficulty";
import DifficultyOption from "./DifficultyOption";

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
