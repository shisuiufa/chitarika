import type { ReadingTask } from "@/features/game/types/reading";
import type { Level } from "@/features/game/types/level";
import { getElapsedSeconds } from "@/features/game/model/time/get-elapsed-seconds";
import { formatElapsedTime } from "@/features/game/model/time/format-elapsed-time";
import { countReadingUnits } from "@/features/game/model/reading/count-reading-units";
import { getReadingSpeed } from "@/features/game/model/reading/get-reading-speed";
import Card from "@/shared/ui/Card";
import ResultMetricCard from "@/features/game/components/result/ResultMetricCard";
import { LEVELS } from "@/features/game/constants/levels";
import { getReadingUnitLabel } from "@/features/game/model/reading/get-reading-unit-label";
import TimeIcon from "@/shared/icons/TimeIcon";
import BookIcon from "@/shared/icons/BookIcon";
import ReadIcon from "@/shared/icons/ReadIcon";
import Button from "@/shared/ui/Button";
import {useResultConfetti} from "@/features/game/hooks/useResultConfetti";

type GameResultProps = {
  startedAt: number;
  completedAt: number;
  tasks: ReadingTask[];
  level: Level;
  onOpenSettings: () => void;
  onStart: () => void;
};

export default function GameResult({
  startedAt,
  completedAt,
  tasks,
  level,
  onOpenSettings,
  onStart
}: GameResultProps) {
  const elapsedSeconds = getElapsedSeconds(startedAt, completedAt);

  const formattedTime = formatElapsedTime(elapsedSeconds);

  const readUnitCount = countReadingUnits(tasks, level);

  const readingSpeed = getReadingSpeed(readUnitCount, elapsedSeconds);

  const isSyllables = level === LEVELS.Syllables;

  const speedLabel = isSyllables ? "Слогов в минуту" : "Слов в минуту";

  const readingUnitLabel = getReadingUnitLabel(readUnitCount, level);

  useResultConfetti();

  return (
    <>
      <div className="z-201 w-full lg:w-[75%] flex flex-col gap-10 text-center">
        <div>
          <h1 className="text-brown font-bold text-5xl mb-2">Читарика</h1>

          <h2 className="font-bold text-2xl">Твой результат</h2>
        </div>

        <Card innerClassName="p-7 lg:p-15">
          <div className="w-full flex justify-between gap-5 lg:gap-10">
            <ResultMetricCard
              className="flex-1"
              color="yellow"
              icon={<TimeIcon className="size-10" />}
              label="Общее время"
              value={formattedTime}
            />

            <ResultMetricCard
              className="flex-1"
              color="orange"
              icon={<BookIcon className="size-10" />}
              label={speedLabel}
              value={readingSpeed}
            />

            <ResultMetricCard
              className="flex-1"
              color="green"
              icon={<ReadIcon className="size-10" />}
              label="Прочитано"
              value={`${readUnitCount} ${readingUnitLabel}`}
            />
          </div>
        </Card>

        <div className="w-fit mx-auto">
          <Button size="xl" className="uppercase mb-5 w-full" onClick={onStart}>
            Еще раз
          </Button>

          <div className="flex gap-5">
            <Button onClick={onOpenSettings} size="lg" variant="secondary" className="uppercase">
              настройки
            </Button>
            <Button size="lg" variant="secondary" className="uppercase">
              История
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
