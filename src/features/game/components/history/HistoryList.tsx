import type { ReadingTask } from "@/features/game/types/reading";
import type { Level } from "@/features/game/types/level";
import HistoryItem from "@/features/game/components/history/HistoryItem";

type GameHistoryListProps = {
  className?: string;
  tasks: ReadingTask[];
  level: Level;
};

export default function HistoryList({
  className = "",
  tasks,
  level,
}: GameHistoryListProps) {
  return (
    <div className={`${className}`}>
      <div className="flex flex-col gap-vh-[35px]">
        {tasks.map((task, index) => (
          <HistoryItem
            key={task.id}
            task={task}
            number={index + 1}
            level={level}
          />
        ))}
      </div>
    </div>
  );
}
