import type { ComponentType } from "react";
import { type LEVELS, LEVEL_OPTIONS } from "@/features/game/constants/levels";

export type Level = (typeof LEVELS)[keyof typeof LEVELS];

export type IconComponent = ComponentType<{
  size?: string;
}>;

export type LevelOption = (typeof LEVEL_OPTIONS)[number];
