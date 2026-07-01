import { DIFFICULTIES } from "../../constants/difficulties";
import { LEVELS } from "../../constants/levels";
import type { ReadingTaskGroup } from "../../types/reading";

export const syllableEasyGroup = {
  id: "syllables-easy",
  level: LEVELS.Syllables,
  difficulty: DIFFICULTIES.Easy,
  tasks: [
    { id: "syllable-easy-1", value: "ма" },
    { id: "syllable-easy-2", value: "мо" },
    { id: "syllable-easy-3", value: "му" },
    { id: "syllable-easy-4", value: "мы" },
    { id: "syllable-easy-5", value: "ми" },

    { id: "syllable-easy-6", value: "па" },
    { id: "syllable-easy-7", value: "по" },
    { id: "syllable-easy-8", value: "пу" },
    { id: "syllable-easy-9", value: "пы" },
    { id: "syllable-easy-10", value: "пи" },

    { id: "syllable-easy-11", value: "ба" },
    { id: "syllable-easy-12", value: "бо" },
    { id: "syllable-easy-13", value: "бу" },
    { id: "syllable-easy-14", value: "бы" },
    { id: "syllable-easy-15", value: "би" },

    { id: "syllable-easy-16", value: "са" },
    { id: "syllable-easy-17", value: "со" },
    { id: "syllable-easy-18", value: "су" },
    { id: "syllable-easy-19", value: "сы" },
    { id: "syllable-easy-20", value: "си" },

    { id: "syllable-easy-21", value: "ла" },
    { id: "syllable-easy-22", value: "ло" },
    { id: "syllable-easy-23", value: "лу" },
    { id: "syllable-easy-24", value: "лы" },
    { id: "syllable-easy-25", value: "ли" },

    { id: "syllable-easy-26", value: "на" },
    { id: "syllable-easy-27", value: "но" },
    { id: "syllable-easy-28", value: "ну" },
    { id: "syllable-easy-29", value: "ны" },
    { id: "syllable-easy-30", value: "ни" },
  ],
} satisfies ReadingTaskGroup;
