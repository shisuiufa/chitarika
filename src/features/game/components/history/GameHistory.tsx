import Card from "@/shared/ui/Card";
import type { Difficulty } from "../../types/difficulty";
import type { Level } from "../../types/level";
import type { ReadingTask } from "../../types/reading";
import GameHistoryActions from "./HistoryActions";
import HistoryHeader from "./HistoryHeader";
import HistoryList from "./HistoryList";
import HistorySummary from "./HistorySummary";

type GameHistoryProps = {
  tasks: ReadingTask[];
  level: Level;
  difficulty: Difficulty;
  onBackToResult: () => void;
  onRestart: () => void;
};

export function GameHistory({
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
