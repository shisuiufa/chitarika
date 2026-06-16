export function getElapsedSeconds(startedAt: number, endAt: number) {
  return Math.max(0, Math.ceil((endAt - startedAt) / 1000));
}
