import LinesIcon from "@/shared/icons/LinesIcon";
import { TextIcon } from "@/shared/icons/TextIcon";

export const LEVELS = {
  Syllables: "syllables",
  Words: "words",
  Sentences: "sentences",
  Texts: "texts",
} as const;

export const LEVEL_OPTIONS = [
  {
    id: LEVELS.Syllables,
    title: "Слоги",
    icon: "МА",
  },
  {
    id: LEVELS.Words,
    title: "Слова",
    icon: "АВС",
  },
  {
    id: LEVELS.Sentences,
    title: "Предложения",
    icon: LinesIcon,
  },
  {
    id: LEVELS.Texts,
    title: "Тексты",
    icon: TextIcon,
  },
] as const;
