import type { Level } from "@/features/game/types/level";
import type { Difficulty } from "@/features/game/types/difficulty";

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
