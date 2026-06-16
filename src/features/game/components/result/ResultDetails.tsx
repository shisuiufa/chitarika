import type { Level } from "@/features/game/types/level";
import type { Difficulty } from "@/features/game/types/difficulty";
import { LEVELS } from "@/features/game/constants/levels";
import { DIFFICULTIES } from "@/features/game/constants/difficulties";
import ResultInfoCard from "@/features/game/components/result/ResultInfoCard";
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

const LEVEL_NUMBER: Record<Level, number> = {
  [LEVELS.Syllables]: 1,
  [LEVELS.Words]: 2,
  [LEVELS.Sentences]: 3,
  [LEVELS.Texts]: 4,
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
    <div className={`grid gap-5 sm:grid-cols-2 ${className}`}>
      <ResultInfoCard
        icon={<LevelIcon />}
        label={`Уровень ${LEVEL_NUMBER[level]}`}
        value={LEVEL_LABEL[level]}
      />

      <ResultInfoCard
        icon={<StarIcon className="size-5" />}
        label="Сложность"
        value={DIFFICULTY_LABEL[difficulty]}
      />
    </div>
  );
}
