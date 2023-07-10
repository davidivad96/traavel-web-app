export const toISODateString = (date: Date): string =>
  date.toISOString().split("T")[0];
