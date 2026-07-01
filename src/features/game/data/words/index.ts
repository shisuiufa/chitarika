import type { ReadingTaskGroup } from "../../types/reading";

import { wordEasyGroup } from "./easy";
import { wordHardGroup } from "./hard";
import { wordMediumGroup } from "./medium";

export const wordGroups = [
  wordEasyGroup,
  wordMediumGroup,
  wordHardGroup,
] satisfies ReadingTaskGroup[];
