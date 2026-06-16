import type { Level } from "@/features/game/types/level";
import { LEVELS } from "@/features/game/constants/levels";

export function getReadingUnitLabel(count: number, level: Level): string {
  const forms =
    level === LEVELS.Syllables
      ? ["слог", "слога", "слогов"]
      : ["слово", "слова", "слов"];

  const lastTwoDigits = count % 100;
  const lastDigit = count % 10;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return forms[2];
  }

  if (lastDigit === 1) {
    return forms[0];
  }

  if (lastDigit >= 2 && lastDigit <= 4) {
    return forms[1];
  }

  return forms[2];
}
