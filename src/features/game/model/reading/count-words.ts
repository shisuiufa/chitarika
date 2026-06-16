export function countWords(value: string) {
  return value.replace(/[[\]]/g, "").trim().split(/\s+/).filter(Boolean).length;
}
