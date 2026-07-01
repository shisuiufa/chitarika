import BookIcon from "@/shared/icons/BookIcon";
import ReadIcon from "@/shared/icons/ReadIcon";
import TimeIcon from "@/shared/icons/TimeIcon";
import { LEVELS } from "../../../constants/levels";
import type { Level } from "../../../types/level";
import ResultMetricCard from "./ResultMetricCard";

type ResultMetricsProps = {
  level: Level;
  formattedTime: string;
  readingSpeed: number;
  completedTaskCount: number;
  className?: string;
};

export default function ResultMetrics({
  level,
  formattedTime,
  readingSpeed,
  completedTaskCount,
  className = "",
}: ResultMetricsProps) {
  const isSyllables = level === LEVELS.Syllables;

  const speedLabel = isSyllables ? "Слогов в минуту" : "Слов в минуту";

  return (
    <div
      className={`grid gap-vw-[20px] md:gap-vh-[35px] md:grid-cols-3 ${className}`}
    >
      <ResultMetricCard
        variant="yellow"
        icon={<TimeIcon />}
        label="Время затрачено"
        value={formattedTime}
      />

      <ResultMetricCard
        variant="orange"
        icon={<BookIcon />}
        label={`${speedLabel}`}
        value={readingSpeed}
      />

      <ResultMetricCard
        variant="green"
        icon={<ReadIcon />}
        label="Заданий выполнено"
        value={completedTaskCount}
      />
    </div>
  );
}
