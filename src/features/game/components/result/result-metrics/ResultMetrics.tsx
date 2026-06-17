import ResultMetricCard from "@/features/game/components/result/result-metrics/ResultMetricCard";
import TimeIcon from "@/shared/icons/TimeIcon";
import BookIcon from "@/shared/icons/BookIcon";
import ReadIcon from "@/shared/icons/ReadIcon";
import { LEVELS } from "@/features/game/constants/levels";
import type { Level } from "@/features/game/types/level";

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
  className,
}: ResultMetricsProps) {
  const isSyllables = level === LEVELS.Syllables;

  const speedLabel = isSyllables ? "Слогов в минуту" : "Слов в минуту";

  return (
    <div className={`grid gap-6 md:grid-cols-3 ${className}`}>
      <ResultMetricCard
        variant="yellow"
        icon={<TimeIcon className="size-6 md:size-8" />}
        label="Время затрачено"
        value={formattedTime}
      />

      <ResultMetricCard
        variant="orange"
        icon={<BookIcon className="size-6 md:size-8" />}
        label={`${speedLabel}`}
        value={readingSpeed}
      />

      <ResultMetricCard
        variant="green"
        icon={<ReadIcon className="size-6 md:size-8" />}
        label="Заданий выполнено"
        value={completedTaskCount}
      />
    </div>
  );
}
