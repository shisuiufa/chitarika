import type { ReadingTaskGroup } from "../../types/reading";

import { sentenceEasyGroup } from "./easy";
import { sentenceHardGroup } from "./hard";
import { sentenceMediumGroup } from "./medium";

export const sentenceGroups = [
  sentenceEasyGroup,
  sentenceMediumGroup,
  sentenceHardGroup,
] satisfies ReadingTaskGroup[];
