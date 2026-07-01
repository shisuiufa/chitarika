import LevelIcon from "@/shared/icons/LevelIcon";
import StarIcon from "@/shared/icons/StarIcon";
import { DIFFICULTIES } from "../../../constants/difficulties";
import { LEVELS } from "../../../constants/levels";
import type { Difficulty } from "../../../types/difficulty";
import type { Level } from "../../../types/level";
import ResultInfoCard from "./ResultInfoCard";

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
    <div className={`flex gap-vw-[25px] ${className}`}>
      <ResultInfoCard
        className="flex-1"
        icon={<LevelIcon />}
        label={`Уровень`}
        value={LEVEL_LABEL[level]}
      />

      <ResultInfoCard
        className="flex-1"
        icon={<StarIcon />}
        label="Сложность"
        value={DIFFICULTY_LABEL[difficulty]}
      />
    </div>
  );
}
