import type { DIFFICULTIES } from "@/features/game/constants/difficulties";

export type Difficulty = (typeof DIFFICULTIES)[keyof typeof DIFFICULTIES];

export type DifficultyOption = {
  id: Difficulty;
  title: string;
  stars: number;
};
