import type {
  IconComponent,
  LevelOption as LevelOptionType,
} from "@/features/game/types/level";
import Button from "@/shared/ui/Button";
import { SELECTABLE_BUTTON_VARIANTS } from "@/shared/ui/Button/button-variants";

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

  const btnClass = isSelected
    ? SELECTABLE_BUTTON_VARIANTS.selected
    : SELECTABLE_BUTTON_VARIANTS.default;

  return (
    <Button
      size="lg"
      className={`
            flex flex-col justify-between items-center p-5
            font-bold normal-case!
            ${btnClass}
            `}
      onClick={onClick}
    >
      <div className="mb-3">
        {isTextIcon ? (
          <span className="text-3xl">{icon}</span>
        ) : (
          <Icon size="w-9 h-9" />
        )}
      </div>

      <h1 className="text-base">{title}</h1>
    </Button>
  );
}
