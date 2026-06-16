import { DIFFICULTIES } from "@/features/game/constants/difficulties";
import { LEVELS } from "@/features/game/constants/levels";
import type { ReadingTaskGroup } from "@/features/game/types/reading";

export const wordHardGroup = {
  id: "words-hard",
  level: LEVELS.Words,
  difficulty: DIFFICULTIES.Hard,
  tasks: [
    { id: "word-hard-1", value: "волшебник" },
    { id: "word-hard-2", value: "приключение" },
    { id: "word-hard-3", value: "учительница" },
    { id: "word-hard-4", value: "предложение" },
    { id: "word-hard-5", value: "старательный" },

    { id: "word-hard-6", value: "замечательный" },
    { id: "word-hard-7", value: "воображение" },
    { id: "word-hard-8", value: "путешествие" },
    { id: "word-hard-9", value: "таинственный" },
    { id: "word-hard-10", value: "любознательный" },

    { id: "word-hard-11", value: "впечатление" },
    { id: "word-hard-12", value: "произведение" },
    { id: "word-hard-13", value: "исследователь" },
    { id: "word-hard-14", value: "внимательный" },
    { id: "word-hard-15", value: "удивительный" },

    { id: "word-hard-16", value: "достопримечательность" },
    { id: "word-hard-17", value: "разноцветный" },
    { id: "word-hard-18", value: "познавательный" },
    { id: "word-hard-19", value: "самостоятельный" },
    { id: "word-hard-20", value: "ответственный" },

    { id: "word-hard-21", value: "торжественный" },
    { id: "word-hard-22", value: "необыкновенный" },
    { id: "word-hard-23", value: "изобретатель" },
    { id: "word-hard-24", value: "размышление" },
    { id: "word-hard-25", value: "наблюдательность" },

    { id: "word-hard-26", value: "взаимопонимание" },
    { id: "word-hard-27", value: "препятствие" },
    { id: "word-hard-28", value: "благодарность" },
    { id: "word-hard-29", value: "соревнование" },
    { id: "word-hard-30", value: "представление" },
  ],
} satisfies ReadingTaskGroup;
