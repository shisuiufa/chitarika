import { LEVELS } from "../constants/levels";
import type { Level } from "../types/level";
import type { ReadingTask, ReadingTaskGroup } from "../types/reading";
import type { GameSettingsState } from "../types/setting";

async function loadGroupsByLevel(level: Level): Promise<ReadingTaskGroup[]> {
  switch (level) {
    case LEVELS.Syllables:
      return (await import("@/features/game/data/syllables")).syllableGroups;

    case LEVELS.Words:
      return (await import("@/features/game/data/words")).wordGroups;

    case LEVELS.Sentences:
      return (await import("@/features/game/data/sentences")).sentenceGroups;

    case LEVELS.Texts:
      return (await import("@/features/game/data/texts")).textGroups;
  }
}

function shuffleTasks(tasks: ReadingTask[]): ReadingTask[] {
  const shuffledTasks = [...tasks];

  for (let index = shuffledTasks.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));

    [shuffledTasks[index], shuffledTasks[randomIndex]] = [
      shuffledTasks[randomIndex],
      shuffledTasks[index],
    ];
  }

  return shuffledTasks;
}

export async function readingTasks(
  settings: GameSettingsState,
): Promise<ReadingTask[]> {
  const groups = await loadGroupsByLevel(settings.level);

  const group = groups.find((group) => {
    return group.difficulty === settings.difficulty;
  });

  if (!group) {
    throw new Error("Reading task group not found");
  }

  return shuffleTasks(group.tasks).slice(0, settings.answers);
}
