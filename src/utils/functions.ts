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

export const sortActivities = (activities: Activity[]): Activity[] =>
  activities.sort(
    (a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime()
  );
