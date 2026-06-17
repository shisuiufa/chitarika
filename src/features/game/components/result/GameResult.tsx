import type { ReadingTask } from "@/features/game/types/reading";
import type { Level } from "@/features/game/types/level";
import type { Difficulty } from "@/features/game/types/difficulty";
import { getElapsedSeconds } from "@/features/game/model/time/get-elapsed-seconds";
import { formatElapsedTime } from "@/features/game/model/time/format-elapsed-time";
import { countReadingUnits } from "@/features/game/model/reading/count-reading-units";
import { getReadingSpeed } from "@/features/game/model/reading/get-reading-speed";
import Card from "@/shared/ui/Card";
import { getReadingUnitLabel } from "@/features/game/model/reading/get-reading-unit-label";
import ResultStars from "@/features/game/components/result/ResultStars";
import ResultActions from "@/features/game/components/result/ResultActions";
import ResultMetrics from "@/features/game/components/result/result-metrics/ResultMetrics";
import ResultDetails from "@/features/game/components/result/result-details/ResultDetails";

type GameResultProps = {
  startedAt: number;
  completedAt: number;
  tasks: ReadingTask[];
  level: Level;
  difficulty: Difficulty;
  onOpenSettings: () => void;
  onOpenHistory: () => void;
  onRestart: () => void;
};

export default function GameResult({
  startedAt,
  completedAt,
  tasks,
  level,
  difficulty,
  onOpenSettings,
  onOpenHistory,
  onRestart,
}: GameResultProps) {
  const elapsedSeconds = getElapsedSeconds(startedAt, completedAt);

  const formattedTime = formatElapsedTime(elapsedSeconds);

  const readUnitCount = countReadingUnits(tasks, level);

  const readingSpeed = getReadingSpeed(readUnitCount, elapsedSeconds);

  const readingUnitLabel = getReadingUnitLabel(readUnitCount, level);

  return (
    <div className="flex grow w-full lg:w-[90%] xl:w-[70%] flex-col">
      <Card
        className="w-full h-full"
        innerClassName="relative overflow-hidden p-5 sm:p-6 lg:p-10"
      >
        <div className="w-full h-full flex flex-col gap-3 md:gap-5 justify-between">
          <ResultStars className="mb-4" />

          <h1 className="text-2xl md:text-3xl lg:text-[4vh] font-extrabold text-brown text-center">
            Отличная работа!
          </h1>

          <ResultDetails level={level} difficulty={difficulty} />

          <Card
            size="lg"
            innerClassName="bg-cream px-2 py-3 md:px-4 md:py-4 text-center"
          >
            <span className="font-nunito-sans text-lg sm:text-xl lg:text-2xl font-extrabold text-[#7B6C4E]">
              Прочитано
            </span>
            <strong className="mt-2 block font-comfortaa text-2xl sm:text-3xl lg:text-5xl font-extrabold leading-tight text-dark-brown">
              {readUnitCount} {readingUnitLabel}
            </strong>
          </Card>

          <ResultMetrics
            formattedTime={formattedTime}
            readingSpeed={readingSpeed}
            level={level}
            completedTaskCount={tasks.length}
          />

          <ResultActions
            onRestart={onRestart}
            onOpenSettings={onOpenSettings}
            onOpenHistory={onOpenHistory}
          />
        </div>
      </Card>
    </div>
  );
}
