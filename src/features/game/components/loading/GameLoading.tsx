import ProgressBar from "@/shared/ui/ProgressBar";
import LoadingText from "@/features/game/components/loading/LoadingText";
import { useEffect, useEffectEvent, useState } from "react";
import type { ReadingTask } from "@/features/game/types/reading";
import type { GameSettingsState } from "@/features/game/types/setting";
import { readingTasks } from "@/features/game/model/reading-tasks";

type GameLoadingProps = {
  settings: GameSettingsState;
  onComplete: (tasks: ReadingTask[]) => void;
  onOpenSettings: () => void;
};

export default function GameLoading({
  settings,
  onComplete,
  onOpenSettings,
}: GameLoadingProps) {
  const [value, setValue] = useState(0);

  const completeLoading = useEffectEvent(onComplete);
  const openSettings = useEffectEvent(onOpenSettings);

  useEffect(() => {
    let ignore = false;
    let progress = 0;
    let completeTimeoutId: number | null = null;
    let tasks: ReadingTask[] = [];
    let isTasksReady = false;

    readingTasks(settings)
      .then((loadedTasks) => {
        if (ignore) return;
        tasks = loadedTasks;
        isTasksReady = true;
      })
      .catch(() => {
        if (ignore) return;
        openSettings();
      });

    const intervalId = window.setInterval(() => {
      if (ignore) return;

      const targetValue = isTasksReady ? 100 : 70;
      const increment = isTasksReady ? 5 : 4;

      if (progress >= targetValue) return;

      progress = Math.min(progress + increment, targetValue);

      setValue(progress);

      if (progress === 100 && tasks !== null) {
        window.clearInterval(intervalId);

        completeTimeoutId = window.setTimeout(() => {
          if (ignore || tasks === null) return;

          completeLoading(tasks);
        }, 500);
      }
    }, 100);

    return () => {
      ignore = true;
      window.clearInterval(intervalId);

      if (completeTimeoutId !== null) {
        window.clearTimeout(completeTimeoutId);
      }
    };
  }, [settings]);

  return (
    <>
      <div className="w-full lg:w-[50%]">
        <LoadingText value={value} className="mb-4" />
        <ProgressBar value={value} showPercent={true} />
      </div>
    </>
  );
}
