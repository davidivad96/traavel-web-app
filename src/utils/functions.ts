export const toISODateString = (date: Date): string =>
  date.toISOString().split("T")[0];

export const generateDates = (startDate: Date, endDate: Date): Date[] => {
  const dates = [];
  let currentDate = startDate;
  while (currentDate <= endDate) {
    dates.push(currentDate);
    currentDate = new Date(currentDate);
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return dates;
};
