import type { Difficulty } from "../types/difficulty";
import type { Level } from "../types/level";

export type GameSettingsState = {
  level: Level;
  answers: number;
  difficulty: Difficulty;
};
