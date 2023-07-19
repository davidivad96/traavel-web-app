import { Activity } from "@/models";

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

export const getNumberOfDays = (startDate: Date, endDate: Date): number => {
  const oneDay = 24 * 60 * 60 * 1000;
  return (
    Math.round(Math.abs((startDate.getTime() - endDate.getTime()) / oneDay)) + 1
  );
};

export const sortActivities = (activities: Activity[]): Activity[] =>
  activities.sort(
    (a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime()
  );
