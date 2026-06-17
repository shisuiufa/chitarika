import type { ReadingTask } from "@/features/game/types/reading";
import type { Level } from "@/features/game/types/level";
import type { Difficulty } from "@/features/game/types/difficulty";
import Card from "@/shared/ui/Card";
import HistoryHeader from "@/features/game/components/history/HistoryHeader";
import HistorySummary from "@/features/game/components/history/HistorySummary";
import HistoryList from "@/features/game/components/history/HistoryList";
import GameHistoryActions from "@/features/game/components/history/HistoryActions";

type GameHistoryProps = {
  tasks: ReadingTask[];
  level: Level;
  difficulty: Difficulty;
  onBackToResult: () => void;
  onRestart: () => void;
};

export default function GameHistory({
  tasks,
  level,
  difficulty,
  onBackToResult,
  onRestart,
}: GameHistoryProps) {
  return (
    <Card
      className="w-full h-full lg:w-[90%] xl:w-[70%] flex flex-col "
      innerClassName="grow flex flex-col p-5 sm:p-6 lg:p-8"
    >
      <HistoryHeader className="mb-4" level={level} difficulty={difficulty} />

      <div className="grow overflow-y-auto border-y-2 border-dashed border-sand/70 px-2 py-5">
        <HistorySummary className="mb-4" count={tasks.length} />

        <HistoryList tasks={tasks} level={level} />
      </div>

      <GameHistoryActions
        className="mt-4"
        onBackToResult={onBackToResult}
        onRestart={onRestart}
      />
    </Card>
  );
}
