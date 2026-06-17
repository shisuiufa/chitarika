import TaskCard from "@/features/game/components/play/TaskCard";
import PlayHeader from "@/features/game/components/play/PlayHeader";
import type { GameSettingsState } from "@/features/game/types/setting";
import type { ReadingTask } from "@/features/game/types/reading";

type GameStateProps = {
  settings: GameSettingsState;
  tasks: ReadingTask[];
  currentTaskIndex: number;
  onNextTask: () => void;
  onComplete: () => void;
};

export default function GamePlay({
  settings,
  tasks,
  currentTaskIndex,
  onNextTask,
  onComplete,
}: GameStateProps) {
  const lastTask = currentTaskIndex === tasks.length - 1;
  const buttonText = lastTask ? "Завершить" : "Далее";
  const currentTask = tasks[currentTaskIndex];

  const handleClick = () => {
    if (lastTask) {
      onComplete();
    } else {
      onNextTask();
    }
  };

  return (
    <div className="w-full flex h-full flex-col justify-center gap-vh-[30px] ">
      <PlayHeader
        level={settings.level}
        current={currentTaskIndex + 1}
        total={tasks.length}
      />

      <TaskCard
        className="grow"
        level={settings.level}
        task={currentTask}
        onClick={handleClick}
        btnText={buttonText}
        isLastTask={lastTask}
      />
    </div>
  );
}
