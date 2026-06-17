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
      className="w-full h-full flex flex-col "
      innerClassName="grow flex flex-col p-vh-[40px]"
    >
      <HistoryHeader
        className="mb-vh-[35px]"
        level={level}
        difficulty={difficulty}
      />

      <div className="grow overflow-y-auto border-t-vh-[5px] border-b-vh-[5px] border-dashed border-sand/70 px-vw-[10px] py-vh-[35px]">
        <HistorySummary className="mb-vh-[35px]" count={tasks.length} />

        <HistoryList tasks={tasks} level={level} />
      </div>

      <GameHistoryActions
        className="mt-vh-[35px]"
        onBackToResult={onBackToResult}
        onRestart={onRestart}
      />
    </Card>
  );
}
