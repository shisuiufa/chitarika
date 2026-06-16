import type { Level } from "@/features/game/types/level";
import type { Difficulty } from "@/features/game/types/difficulty";

export type GameSettingsState = {
  level: Level;
  answers: number;
  difficulty: Difficulty;
};
