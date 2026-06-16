export const DIFFICULTIES = {
  Easy: "easy",
  Medium: "medium",
  Hard: "hard",
} as const;

export const DIFFICULTY_OPTIONS = [
  {
    id: DIFFICULTIES.Easy,
    title: "Легко",
    stars: 1,
  },
  {
    id: DIFFICULTIES.Medium,
    title: "Средне",
    stars: 2,
  },
  {
    id: DIFFICULTIES.Hard,
    title: "Сложно",
    stars: 3,
  },
] as const;
