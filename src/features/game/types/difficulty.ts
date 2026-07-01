import type { DIFFICULTIES } from "../constants/difficulties";

export type Difficulty = (typeof DIFFICULTIES)[keyof typeof DIFFICULTIES];

export type DifficultyOption = {
  id: Difficulty;
  title: string;
  stars: number;
};
