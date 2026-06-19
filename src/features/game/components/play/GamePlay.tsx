import TaskCard from "@/features/game/components/play/TaskCard";
import type { GameSettingsState } from "@/features/game/types/setting";
import type { ReadingTask } from "@/features/game/types/reading";

type GameStateProps = {
  settings: GameSettingsState;
  tasks: ReadingTask[];
  currentTaskIndex: number;
  onPreviousTask: () => void;
  onNextTask: () => void;
  onComplete: () => void;
};

export default function GamePlay({
  settings,
  tasks,
  currentTaskIndex,
  onPreviousTask,
  onNextTask,
  onComplete,
}: GameStateProps) {
  const currentTask = tasks[currentTaskIndex];
  const isFirstTask = currentTaskIndex === 0;
  const isLastTask = currentTaskIndex === tasks.length - 1;

  return (
    <div className="w-full flex h-full flex-col justify-center">
      <TaskCard
        className="grow"
        task={currentTask}
        level={settings.level}
        difficulty={settings.difficulty}
        current={currentTaskIndex + 1}
        total={tasks.length}
        isFirstTask={isFirstTask}
        isLastTask={isLastTask}
        onBack={onPreviousTask}
        onNextTask={onNextTask}
        onComplete={onComplete}
      />
    </div>
  );
}
