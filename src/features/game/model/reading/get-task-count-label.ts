export function getTaskCountLabel(count: number): string {
  const lastTwoDigits = count % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return "заданий";
  }

  const lastDigit = count % 10;

  if (lastDigit === 1) {
    return "задание";
  }

  if (lastDigit >= 2 && lastDigit <= 4) {
    return "задания";
  }

  return "заданий";
}
