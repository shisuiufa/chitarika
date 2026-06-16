export function getReadingSpeed(unitCount: number, elapsedSeconds: number) {
  if (unitCount <= 0 || elapsedSeconds <= 0) {
    return 0;
  }

  return Math.round((unitCount / elapsedSeconds) * 60);
}
