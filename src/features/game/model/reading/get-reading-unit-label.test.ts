import { describe, expect, it } from "vitest";

import { LEVELS } from "../../constants/levels";
import { getReadingUnitLabel } from "../../model/reading/get-reading-unit-label";

describe("getReadingUnitLabel", () => {
  describe("syllables", () => {
    it.each([
      [0, "слогов"],
      [1, "слог"],
      [2, "слога"],
      [4, "слога"],
      [5, "слогов"],
      [11, "слогов"],
      [12, "слогов"],
      [14, "слогов"],
      [21, "слог"],
      [22, "слога"],
      [25, "слогов"],
      [101, "слог"],
      [111, "слогов"],
    ])("returns correct form for count %i", (count, expected) => {
      expect(getReadingUnitLabel(count, LEVELS.Syllables)).toBe(expected);
    });
  });

  describe("words", () => {
    it.each([
      [0, "слов"],
      [1, "слово"],
      [2, "слова"],
      [4, "слова"],
      [5, "слов"],
      [11, "слов"],
      [12, "слов"],
      [14, "слов"],
      [21, "слово"],
      [22, "слова"],
      [25, "слов"],
      [101, "слово"],
      [111, "слов"],
    ])("returns correct form for count %i", (count, expected) => {
      expect(getReadingUnitLabel(count, LEVELS.Words)).toBe(expected);
    });
  });
});
