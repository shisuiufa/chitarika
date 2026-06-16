import { DIFFICULTIES } from "@/features/game/constants/difficulties";
import { LEVELS } from "@/features/game/constants/levels";
import type { ReadingTaskGroup } from "@/features/game/types/reading";

export const wordEasyGroup = {
  id: "words-easy",
  level: LEVELS.Words,
  difficulty: DIFFICULTIES.Easy,
  tasks: [
    { id: "word-easy-1", value: "мама" },
    { id: "word-easy-2", value: "папа" },
    { id: "word-easy-3", value: "баба" },
    { id: "word-easy-4", value: "деда" },
    { id: "word-easy-5", value: "кот" },

    { id: "word-easy-6", value: "дом" },
    { id: "word-easy-7", value: "лес" },
    { id: "word-easy-8", value: "мяч" },
    { id: "word-easy-9", value: "сон" },
    { id: "word-easy-10", value: "сок" },

    { id: "word-easy-11", value: "лук" },
    { id: "word-easy-12", value: "нос" },
    { id: "word-easy-13", value: "рот" },
    { id: "word-easy-14", value: "мак" },
    { id: "word-easy-15", value: "сыр" },

    { id: "word-easy-16", value: "рак" },
    { id: "word-easy-17", value: "жук" },
    { id: "word-easy-18", value: "кит" },
    { id: "word-easy-19", value: "лиса" },
    { id: "word-easy-20", value: "сова" },

    { id: "word-easy-21", value: "рыба" },
    { id: "word-easy-22", value: "ваза" },
    { id: "word-easy-23", value: "луна" },
    { id: "word-easy-24", value: "рука" },
    { id: "word-easy-25", value: "нога" },

    { id: "word-easy-26", value: "каша" },
    { id: "word-easy-27", value: "вода" },
    { id: "word-easy-28", value: "рама" },
    { id: "word-easy-29", value: "муха" },
    { id: "word-easy-30", value: "зима" },
  ],
} satisfies ReadingTaskGroup;
