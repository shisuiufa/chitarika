import { LEVELS } from "@/features/game/constants/levels";
import { DIFFICULTIES } from "@/features/game/constants/difficulties";
import type { ReadingTaskGroup } from "@/features/game/types/reading";

export const sentenceMediumGroup = {
  id: "sentences-medium",
  level: LEVELS.Sentences,
  difficulty: DIFFICULTIES.Medium,
  tasks: [
    { id: "sentence-medium-1", value: "На столе лежит [красивая ручка]." },
    { id: "sentence-medium-2", value: "В лесу растёт [зелёная трава]." },
    { id: "sentence-medium-3", value: "Заяц прыгнул под [большой куст]." },
    { id: "sentence-medium-4", value: "Папа построил [маленький домик]." },
    { id: "sentence-medium-5", value: "Сова учит читать [новые слова]." },

    { id: "sentence-medium-6", value: "Дети пошли в [светлую школу]." },
    { id: "sentence-medium-7", value: "Утром светит [яркое солнце]." },
    { id: "sentence-medium-8", value: "На полке стоит [старая книга]." },
    { id: "sentence-medium-9", value: "Котёнок играет с [красным мячиком]." },
    { id: "sentence-medium-10", value: "Рыжая лиса нашла [глубокую нору]." },

    {
      id: "sentence-medium-11",
      value: "Мальчик аккуратно сложил [чистую одежду].",
    },
    { id: "sentence-medium-12", value: "Мама приготовила [вкусный пирог]." },
    { id: "sentence-medium-13", value: "На дороге стояла [большая машина]." },
    { id: "sentence-medium-14", value: "Девочка нарисовала [высокое дерево]." },
    { id: "sentence-medium-15", value: "Собака принесла [длинную палку]." },

    { id: "sentence-medium-16", value: "В саду распустились [жёлтые цветы]." },
    { id: "sentence-medium-17", value: "Птицы построили [маленькое гнездо]." },
    { id: "sentence-medium-18", value: "На окне стояла [круглая ваза]." },
    { id: "sentence-medium-19", value: "Бабушка связала [тёплый шарф]." },
    { id: "sentence-medium-20", value: "Дедушка починил [старый велосипед]." },

    { id: "sentence-medium-21", value: "Ребята увидели [высокую радугу]." },
    { id: "sentence-medium-22", value: "По небу плывут [белые облака]." },
    { id: "sentence-medium-23", value: "В комнате горит [яркая лампа]." },
    { id: "sentence-medium-24", value: "Маша открыла [новую тетрадь]." },
    { id: "sentence-medium-25", value: "Саша прочитал [короткий рассказ]." },

    { id: "sentence-medium-26", value: "На берегу лежал [гладкий камень]." },
    { id: "sentence-medium-27", value: "В лесу росли [высокие сосны]." },
    {
      id: "sentence-medium-28",
      value: "Учитель показал [интересную картину].",
    },
    { id: "sentence-medium-29", value: "Дети собрали [спелые яблоки]." },
    { id: "sentence-medium-30", value: "Мальчик нашёл [потерянную игрушку]." },
  ],
} satisfies ReadingTaskGroup;
