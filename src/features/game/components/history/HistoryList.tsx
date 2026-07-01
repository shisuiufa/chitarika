import type { Level } from "../..//types/level";
import type { ReadingTask } from "../..//types/reading";
import HistoryItem from "./HistoryItem";

type GameHistoryListProps = {
  className?: string;
  tasks: ReadingTask[];
  level: Level;
};

export default function HistoryList({
  className,
  tasks,
  level,
}: GameHistoryListProps) {
  return (
    <div className={className}>
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
