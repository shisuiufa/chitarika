import Card from "@/shared/ui/Card";
import { countReadingUnits } from "../..//model/reading/count-reading-units";
import { getReadingSpeed } from "../..//model/reading/get-reading-speed";
import { getReadingUnitLabel } from "../..//model/reading/get-reading-unit-label";
import { formatElapsedTime } from "../..//model/time/format-elapsed-time";
import { getElapsedSeconds } from "../..//model/time/get-elapsed-seconds";
import type { Difficulty } from "../..//types/difficulty";
import type { Level } from "../..//types/level";
import type { ReadingTask } from "../../types/reading";
import ResultActions from "./ResultActions";
import ResultStars from "./ResultStars";
import ResultDetails from "./result-details/ResultDetails";
import ResultMetrics from "./result-metrics/ResultMetrics";

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

export function GameResult({
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
    <Card
      className="w-full h-full"
      innerClassName="relative overflow-hidden p-vh-[40px]"
    >
      <div className="w-full h-full flex flex-col justify-between">
        <div className="grow flex flex-col gap-vh-[35px] border-b-2 border-dashed border-sand/70  pb-vh-[35px] mb-vh-[35px]">
          <ResultStars className="mb-vh-[15px]" />

          <h1 className="text-vh-[45px] font-extrabold text-brown text-center leading-none">
            Отличная работа!
          </h1>

          <ResultDetails level={level} difficulty={difficulty} />

          <Card
            size="lg"
            className="grow"
            innerClassName="bg-cream p-vh-[30px] text-center flex flex-col justify-center items-center"
          >
            <span className="font-nunito-sans text-vh-[30px] font-extrabold text-[#7B6C4E] leading-none">
              Прочитано
            </span>
            <strong className="mt-vh-[15px] block font-comfortaa text-vh-[40px] font-extrabold text-dark-brown leading-none">
              {readUnitCount} {readingUnitLabel}
            </strong>
          </Card>

          <ResultMetrics
            formattedTime={formattedTime}
            readingSpeed={readingSpeed}
            level={level}
            completedTaskCount={tasks.length}
          />
        </div>

        <ResultActions
          onRestart={onRestart}
          onOpenSettings={onOpenSettings}
          onOpenHistory={onOpenHistory}
        />
      </div>
    </Card>
  );
}
