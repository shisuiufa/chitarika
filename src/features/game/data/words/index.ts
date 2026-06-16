import type { ReadingTaskGroup } from "@/features/game/types/reading";

import { wordEasyGroup } from "./easy";
import { wordMediumGroup } from "./medium";
import { wordHardGroup } from "./hard";

export const wordGroups = [
  wordEasyGroup,
  wordMediumGroup,
  wordHardGroup,
] satisfies ReadingTaskGroup[];
