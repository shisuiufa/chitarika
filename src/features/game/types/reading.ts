import type { Difficulty } from "../types/difficulty";
import type { Level } from "../types/level";

export type ReadingTask = {
  id: string;
  value: string;
};

export type ReadingTaskGroup = {
  id: string;
  level: Level;
  difficulty: Difficulty;
  tasks: ReadingTask[];
};
