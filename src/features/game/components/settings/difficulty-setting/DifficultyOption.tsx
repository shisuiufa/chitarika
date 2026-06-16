import type { DifficultyOption as DifficultyOptionType } from "@/features/game/types/difficulty";
import Button from "@/shared/ui/Button";
import { SELECTABLE_BUTTON_VARIANTS } from "@/shared/ui/Button/button-variants";
import StarIcon from "@/shared/icons/StarIcon";

type DifficultyOptionProps = {
  option: DifficultyOptionType;
  onClick: (optionId: DifficultyOptionType["id"]) => void;
  isSelected: boolean;
};

export default function DifficultyOption({
  option,
  onClick,
  isSelected = false,
}: DifficultyOptionProps) {
  const btnClass = isSelected
    ? SELECTABLE_BUTTON_VARIANTS.selected
    : SELECTABLE_BUTTON_VARIANTS.default;

  const listStars = [];

  for (let i = 0; i < option.stars; i++) {
    listStars.push(
      <StarIcon
        className={`${isSelected ? "text-brown" : "text-yellow"} size-5`}
        key={i}
      />,
    );
  }

  return (
    <Button
      size="lg"
      className={`p-6 normal-case! justify-between! ${btnClass}`}
      onClick={() => onClick(option.id)}
    >
      {option.title}

      <span className="flex">{listStars}</span>
    </Button>
  );
}
