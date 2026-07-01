import { DIFFICULTIES } from "../../constants/difficulties";
import { LEVELS } from "../../constants/levels";
import type { ReadingTaskGroup } from "../../types/reading";

export const sentenceEasyGroup = {
  id: "sentences-easy",
  level: LEVELS.Sentences,
  difficulty: DIFFICULTIES.Easy,
  tasks: [
    { id: "sentence-easy-1", value: "Мама читает [книгу]." },
    { id: "sentence-easy-2", value: "Кот сидит у [окна]." },
    { id: "sentence-easy-3", value: "Сова летит над [лесом]." },
    { id: "sentence-easy-4", value: "Мишка нашёл [мячик]." },
    { id: "sentence-easy-5", value: "Лиса бежит по [дороге]." },

    { id: "sentence-easy-6", value: "На небе светит [солнце]." },
    { id: "sentence-easy-7", value: "Рыба плывёт в [реке]." },
    { id: "sentence-easy-8", value: "Птица сидит на [ветке]." },
    { id: "sentence-easy-9", value: "Мальчик открыл [двери]." },
    { id: "sentence-easy-10", value: "Девочка взяла [игрушку]." },

    { id: "sentence-easy-11", value: "Папа чинит [стул]." },
    { id: "sentence-easy-12", value: "Бабушка варит [кашу]." },
    { id: "sentence-easy-13", value: "Дедушка читает [газету]." },
    { id: "sentence-easy-14", value: "Собака несёт [палку]." },
    { id: "sentence-easy-15", value: "Котёнок пьёт [молоко]." },

    { id: "sentence-easy-16", value: "Маша рисует [цветок]." },
    { id: "sentence-easy-17", value: "Саша моет [руки]." },
    { id: "sentence-easy-18", value: "В саду растёт [яблоня]." },
    { id: "sentence-easy-19", value: "На полу лежит [ковёр]." },
    { id: "sentence-easy-20", value: "В комнате стоит [кровать]." },

    { id: "sentence-easy-21", value: "Заяц ест [морковку]." },
    { id: "sentence-easy-22", value: "Ёжик нашёл [гриб]." },
    { id: "sentence-easy-23", value: "Утка плывёт по [озеру]." },
    { id: "sentence-easy-24", value: "Белка держит [орех]." },
    { id: "sentence-easy-25", value: "Лошадь ест [траву]." },

    { id: "sentence-easy-26", value: "Дети идут в [школу]." },
    { id: "sentence-easy-27", value: "Учитель открыл [книгу]." },
    { id: "sentence-easy-28", value: "На парте лежит [тетрадь]." },
    { id: "sentence-easy-29", value: "В пенале лежит [ручка]." },
    { id: "sentence-easy-30", value: "Мальчик пишет [слово]." },
  ],
} satisfies ReadingTaskGroup;
