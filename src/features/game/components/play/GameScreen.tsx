import TaskCard from "@/features/game/components/play/TaskCard";
import GameHeader from "@/features/game/components/play/GameHeader";
import Button from "@/shared/ui/Button";
import ArrowRightIcon from "@/shared/icons/ArrowRightIcon";
import type { GameSettingsState } from "@/features/game/types/setting";
import type { ReadingTask } from "@/features/game/types/reading";

type GameStateProps = {
  settings: GameSettingsState;
  tasks: ReadingTask[];
  currentTaskIndex: number;
  onNextTask: () => void;
  onComplete: () => void;
};

export default function GameScreen({
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
    <>
      <div className="w-full lg:w-[75%] h-full flex flex-col gap-10">
        <GameHeader
          level={settings.level}
          current={currentTaskIndex + 1}
          total={tasks.length}
        />
        <TaskCard className="grow" level={settings.level} task={currentTask} />
        <Button size="lg" className="uppercase mx-auto" onClick={handleClick}>
          <span className="translate-y-0.5 leading-none">{buttonText}</span>
          <ArrowRightIcon />
        </Button>
      </div>
    </>
  );
}
