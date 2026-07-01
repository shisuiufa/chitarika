import StarIcon from "@/shared/icons/StarIcon";
import Button from "@/shared/ui/Button";
import type { DifficultyOption as DifficultyOptionType } from "../../../types/difficulty";

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
  const variant = isSelected ? "accent" : "cream";

  const listStars = [];

  for (let i = 0; i < option.stars; i++) {
    listStars.push(
      <StarIcon
        className={`${isSelected ? "text-brown" : "text-yellow"} size-vh-[20px]`}
        key={i}
      />,
    );
  }

  return (
    <Button
      variant={variant}
      size="lg"
      className="normal-case justify-between px-vw-[35px]"
      onClick={() => onClick(option.id)}
    >
      {option.title}

      <span className="flex">{listStars}</span>
    </Button>
  );
}
