import { DIFFICULTIES } from "../../constants/difficulties";
import { LEVELS } from "../../constants/levels";
import type { ReadingTaskGroup } from "../../types/reading";

export const wordMediumGroup = {
  id: "words-medium",
  level: LEVELS.Words,
  difficulty: DIFFICULTIES.Medium,
  tasks: [
    { id: "word-medium-1", value: "сова" },
    { id: "word-medium-2", value: "книга" },
    { id: "word-medium-3", value: "школа" },
    { id: "word-medium-4", value: "река" },
    { id: "word-medium-5", value: "трава" },

    { id: "word-medium-6", value: "дорога" },
    { id: "word-medium-7", value: "игрушка" },
    { id: "word-medium-8", value: "окно" },
    { id: "word-medium-9", value: "ручка" },
    { id: "word-medium-10", value: "корзина" },

    { id: "word-medium-11", value: "машина" },
    { id: "word-medium-12", value: "дерево" },
    { id: "word-medium-13", value: "молоко" },
    { id: "word-medium-14", value: "собака" },
    { id: "word-medium-15", value: "ворона" },

    { id: "word-medium-16", value: "тетрадь" },
    { id: "word-medium-17", value: "карандаш" },
    { id: "word-medium-18", value: "фонарик" },
    { id: "word-medium-19", value: "кровать" },
    { id: "word-medium-20", value: "тарелка" },

    { id: "word-medium-21", value: "капуста" },
    { id: "word-medium-22", value: "погода" },
    { id: "word-medium-23", value: "картина" },
    { id: "word-medium-24", value: "лопата" },
    { id: "word-medium-25", value: "ракета" },

    { id: "word-medium-26", value: "пирожок" },
    { id: "word-medium-27", value: "воробей" },
    { id: "word-medium-28", value: "комната" },
    { id: "word-medium-29", value: "ребёнок" },
    { id: "word-medium-30", value: "барабан" },
  ],
} satisfies ReadingTaskGroup;
