import type {
  IconComponent,
  LevelOption as LevelOptionType,
} from "@/features/game/types/level";
import Button from "@/shared/ui/Button";

type LevelOptionProps = {
  level: LevelOptionType;
  isSelected: boolean;
  onClick: () => void;
};

export default function LevelOption({
  level,
  isSelected,
  onClick,
}: LevelOptionProps) {
  const { title, icon } = level;

  const isTextIcon = typeof icon === "string";

  const Icon = icon as IconComponent;

  const variant = isSelected ? "accent" : "cream";

  return (
    <Button
      variant={variant}
      size="lg"
      className="flex flex-col justify-between items-center font-bold normal-case"
      onClick={onClick}
    >
      <div className="mb-1 sm:mb-3">
        {isTextIcon ? (
          <span className="text-lg sm:text-3xl">{icon}</span>
        ) : (
          <Icon size="w-4 h-4 sm:w-9 sm:h-9" />
        )}
      </div>

      <h1 className="text-sm sm:text-base">{title}</h1>
    </Button>
  );
}
