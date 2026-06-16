import type { ReadingTaskGroup } from "@/features/game/types/reading";

import { textEasyGroup } from "./easy";
import { textMediumGroup } from "./medium";
import { textHardGroup } from "./hard";

export const textGroups = [
  textEasyGroup,
  textMediumGroup,
  textHardGroup,
] satisfies ReadingTaskGroup[];
