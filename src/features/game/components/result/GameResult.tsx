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
import ResultMetrics from "@/features/game/components/result/ResultMetrics";
import ResultDetails from "@/features/game/components/result/ResultDetails";

type GameResultProps = {
  startedAt: number;
  completedAt: number;
  tasks: ReadingTask[];
  level: Level;
  difficulty: Difficulty;
  onOpenSettings: () => void;
  onRestart: () => void;
};

export default function GameResult({
  startedAt,
  completedAt,
  tasks,
  level,
  difficulty,
  onOpenSettings,
  onRestart,
}: GameResultProps) {
  const elapsedSeconds = getElapsedSeconds(startedAt, completedAt);

  const formattedTime = formatElapsedTime(elapsedSeconds);

  const readUnitCount = countReadingUnits(tasks, level);

  const readingSpeed = getReadingSpeed(readUnitCount, elapsedSeconds);

  const readingUnitLabel = getReadingUnitLabel(readUnitCount, level);

  return (
    <div className="flex w-full lg:w-[75%] flex-col text-center">
      <Card innerClassName="relative overflow-hidden p-5 sm:p-6 lg:p-10">
        <div className="relative z-10">
          <ResultStars className="mb-12" />

          <h1 className="mb-10 text-4xl font-extrabold text-brown sm:text-5xl">
            Отличная работа!
          </h1>

          <ResultDetails
            className="mb-6"
            level={level}
            difficulty={difficulty}
          />

          <Card innerClassName="bg-cream px-5 py-5">
            <span className="font-nunito-sans text-lg font-extrabold text-[#7B6C4E]">
              Прочитано
            </span>
            <strong className="mt-2 block font-comfortaa text-2xl font-extrabold leading-tight text-dark-brown sm:text-3xl lg:text-4xl">
              {readUnitCount} {readingUnitLabel}
            </strong>
          </Card>

          <ResultMetrics
            className="mt-6"
            formattedTime={formattedTime}
            readingSpeed={readingSpeed}
            level={level}
            completedTaskCount={tasks.length}
          />

          <ResultActions
            className="mt-6"
            onRestart={onRestart}
            onOpenSettings={onOpenSettings}
          />
        </div>
      </Card>
    </div>
  );
}
