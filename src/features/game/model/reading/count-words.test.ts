import { describe, expect, it } from "vitest";
import { countWords } from "src/features/game/model/reading/count-words";

describe("countWords", () => {
  it("counts words in a regular string", () => {
    expect(countWords("Мама читает книгу")).toBe(3);
  });

  it("removes square brackets before counting", () => {
    expect(countWords("Мама читает [книгу]")).toBe(3);
  });

  it("handles multiple spaces between words", () => {
    expect(countWords("Мама    читает   книгу")).toBe(3);
  });

  it("handles line breaks and tabs", () => {
    expect(countWords("Мама\nчитает\tкнигу")).toBe(3);
  });

  it("returns 0 for an empty string", () => {
    expect(countWords("")).toBe(0);
  });

  it("returns 0 for a string containing only spaces", () => {
    expect(countWords("     ")).toBe(0);
  });

  it("does not count punctuation as separate words", () => {
    expect(countWords("Мама читает книгу.")).toBe(3);
  });

  it("counts a hyphenated word as one word", () => {
    expect(countWords("Мама читает по-русски")).toBe(3);
  });
});
