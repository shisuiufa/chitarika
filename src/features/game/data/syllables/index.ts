import type { ReadingTaskGroup } from "../../types/reading";

import { syllableEasyGroup } from "./easy";
import { syllableHardGroup } from "./hard";
import { syllableMediumGroup } from "./medium";

export const syllableGroups = [
  syllableEasyGroup,
  syllableMediumGroup,
  syllableHardGroup,
] satisfies ReadingTaskGroup[];
