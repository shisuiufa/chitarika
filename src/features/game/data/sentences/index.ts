import type { ReadingTaskGroup } from "@/features/game/types/reading";

import { sentenceEasyGroup } from "./easy";
import { sentenceMediumGroup } from "./medium";
import { sentenceHardGroup } from "./hard";

export const sentenceGroups = [
  sentenceEasyGroup,
  sentenceMediumGroup,
  sentenceHardGroup,
] satisfies ReadingTaskGroup[];
