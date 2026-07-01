import { DIFFICULTIES } from "../../constants/difficulties";
import { LEVELS } from "../../constants/levels";
import type { ReadingTaskGroup } from "../../types/reading";

export const syllableMediumGroup = {
  id: "syllables-medium",
  level: LEVELS.Syllables,
  difficulty: DIFFICULTIES.Medium,
  tasks: [
    { id: "syllable-medium-1", value: "бра" },
    { id: "syllable-medium-2", value: "бро" },
    { id: "syllable-medium-3", value: "бру" },
    { id: "syllable-medium-4", value: "бри" },

    { id: "syllable-medium-5", value: "гла" },
    { id: "syllable-medium-6", value: "гло" },
    { id: "syllable-medium-7", value: "глу" },

    { id: "syllable-medium-8", value: "гра" },
    { id: "syllable-medium-9", value: "гро" },
    { id: "syllable-medium-10", value: "гру" },

    { id: "syllable-medium-11", value: "дра" },
    { id: "syllable-medium-12", value: "дро" },
    { id: "syllable-medium-13", value: "дру" },

    { id: "syllable-medium-14", value: "кла" },
    { id: "syllable-medium-15", value: "кло" },
    { id: "syllable-medium-16", value: "клу" },

    { id: "syllable-medium-17", value: "пла" },
    { id: "syllable-medium-18", value: "пло" },
    { id: "syllable-medium-19", value: "плу" },

    { id: "syllable-medium-20", value: "пра" },
    { id: "syllable-medium-21", value: "про" },
    { id: "syllable-medium-22", value: "пру" },

    { id: "syllable-medium-23", value: "ста" },
    { id: "syllable-medium-24", value: "сто" },
    { id: "syllable-medium-25", value: "сту" },

    { id: "syllable-medium-26", value: "тра" },
    { id: "syllable-medium-27", value: "тро" },
    { id: "syllable-medium-28", value: "тру" },
    { id: "syllable-medium-29", value: "три" },

    { id: "syllable-medium-30", value: "фла" },
  ],
} satisfies ReadingTaskGroup;
