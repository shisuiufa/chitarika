import type { ReadingTask } from "@/features/game/types/reading";
import type { Level } from "@/features/game/types/level";
import { LEVELS } from "@/features/game/constants/levels";
import { countWords } from "@/features/game/model/reading/count-words";

export function countReadingUnits(tasks: ReadingTask[], level: Level): number {
  if (level === LEVELS.Syllables) {
    return tasks.length;
  }

  return tasks.reduce((total, task) => total + countWords(task.value), 0);
}
