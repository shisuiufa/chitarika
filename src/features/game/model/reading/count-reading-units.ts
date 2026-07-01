import { LEVELS } from "../../constants/levels";
import { countWords } from "../../model/reading/count-words";
import type { Level } from "../../types/level";
import type { ReadingTask } from "../../types/reading";

export function countReadingUnits(tasks: ReadingTask[], level: Level): number {
  if (level === LEVELS.Syllables) {
    return tasks.length;
  }

  return tasks.reduce((total, task) => total + countWords(task.value), 0);
}
