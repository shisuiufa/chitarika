import type { ReadingTaskGroup } from "../../types/reading";

import { textEasyGroup } from "./easy";
import { textHardGroup } from "./hard";
import { textMediumGroup } from "./medium";

export const textGroups = [
  textEasyGroup,
  textMediumGroup,
  textHardGroup,
] satisfies ReadingTaskGroup[];
