import type { Level } from "@/features/game/types/level";
import type { Difficulty } from "@/features/game/types/difficulty";
import { LEVELS } from "@/features/game/constants/levels";
import { DIFFICULTIES } from "@/features/game/constants/difficulties";
import ResultInfoCard from "@/features/game/components/result/result-details/ResultInfoCard";
import LevelIcon from "@/shared/icons/LevelIcon";
import StarIcon from "@/shared/icons/StarIcon";

type ResultDetailsProps = {
  level: Level;
  difficulty: Difficulty;
  className?: string;
};

const LEVEL_LABEL: Record<Level, string> = {
  [LEVELS.Syllables]: "Слоги",
  [LEVELS.Words]: "Слова",
  [LEVELS.Sentences]: "Предложения",
  [LEVELS.Texts]: "Тексты",
};

const DIFFICULTY_LABEL: Record<Difficulty, string> = {
  [DIFFICULTIES.Easy]: "Легко",
  [DIFFICULTIES.Medium]: "Средне",
  [DIFFICULTIES.Hard]: "Сложно",
};

export default function ResultDetails({
  level,
  difficulty,
  className = "",
}: ResultDetailsProps) {
  return (
    <div className={`flex gap-3 ${className}`}>
      <ResultInfoCard
        className="flex-1"
        icon={<LevelIcon className="size-4 xl:size-7" />}
        label={`Уровень`}
        value={LEVEL_LABEL[level]}
      />

      <ResultInfoCard
        className="flex-1"
        icon={<StarIcon className="size-4 xl:size-7" />}
        label="Сложность"
        value={DIFFICULTY_LABEL[difficulty]}
      />
    </div>
  );
}
