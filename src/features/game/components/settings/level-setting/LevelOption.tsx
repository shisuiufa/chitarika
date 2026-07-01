import Button from "@/shared/ui/Button";
import type {
  IconComponent,
  LevelOption as LevelOptionType,
} from "../../../types/level";

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
      className="flex-col font-bold normal-case py-vh-[20px]"
      onClick={onClick}
    >
      <div className="mb-vh-[10px]">
        {isTextIcon ? (
          <span className="text-vh-[50px]">{icon}</span>
        ) : (
          <Icon size="size-vh-[50px]" />
        )}
      </div>

      <h1 className="text-vh-[20px]">{title}</h1>
    </Button>
  );
}
