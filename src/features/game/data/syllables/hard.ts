import { DIFFICULTIES } from "@/features/game/constants/difficulties";
import { LEVELS } from "@/features/game/constants/levels";
import type { ReadingTaskGroup } from "@/features/game/types/reading";

export const syllableHardGroup = {
  id: "syllables-hard",
  level: LEVELS.Syllables,
  difficulty: DIFFICULTIES.Hard,
  tasks: [
    { id: "syllable-hard-1", value: "встре" },
    { id: "syllable-hard-2", value: "взгля" },
    { id: "syllable-hard-3", value: "скра" },
    { id: "syllable-hard-4", value: "скло" },
    { id: "syllable-hard-5", value: "спле" },

    { id: "syllable-hard-6", value: "стра" },
    { id: "syllable-hard-7", value: "стро" },
    { id: "syllable-hard-8", value: "стре" },
    { id: "syllable-hard-9", value: "стри" },

    { id: "syllable-hard-10", value: "сне" },
    { id: "syllable-hard-11", value: "сню" },
    { id: "syllable-hard-12", value: "звя" },
    { id: "syllable-hard-13", value: "зве" },

    { id: "syllable-hard-14", value: "клю" },
    { id: "syllable-hard-15", value: "кря" },
    { id: "syllable-hard-16", value: "пчё" },

    { id: "syllable-hard-17", value: "льда" },
    { id: "syllable-hard-18", value: "мгла" },
    { id: "syllable-hard-19", value: "вздо" },
    { id: "syllable-hard-20", value: "вспле" },

    { id: "syllable-hard-21", value: "скво" },
    { id: "syllable-hard-22", value: "скри" },
    { id: "syllable-hard-23", value: "спра" },
    { id: "syllable-hard-24", value: "спро" },

    { id: "syllable-hard-25", value: "встря" },
    { id: "syllable-hard-26", value: "взбре" },
    { id: "syllable-hard-27", value: "взгро" },
    { id: "syllable-hard-28", value: "вскри" },

    { id: "syllable-hard-29", value: "трёх" },
    { id: "syllable-hard-30", value: "сквоз" },
  ],
} satisfies ReadingTaskGroup;
