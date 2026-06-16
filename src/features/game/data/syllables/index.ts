import type { ReadingTaskGroup } from "@/features/game/types/reading";

import { syllableEasyGroup } from "./easy";
import { syllableMediumGroup } from "./medium";
import { syllableHardGroup } from "./hard";

export const syllableGroups = [
  syllableEasyGroup,
  syllableMediumGroup,
  syllableHardGroup,
] satisfies ReadingTaskGroup[];
