export type Employment = {
  startDate: Date;
  untilDate: Date;
  percentage: number;
  vacationDays: number;
};

function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Hilfsfunktion zur Berechnung der Anzahl Tage im Jahr
function getDaysInYear(date: Date): number {
  const year = date.getFullYear();
  return isLeapYear(year) ? 366 : 365;
}

export function calculateProRataVacationDays(employment: Employment): number {
  // TODO: calculate pro rata (consider workload and days worked)

  const start = employment.startDate;
  const end = employment.untilDate;

  const daysInYear = getDaysInYear(start);
  
  const totalDays = Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;

  const relativeDays = totalDays / daysInYear;

  const vacationDays = employment.vacationDays * relativeDays * (employment.percentage / 100);

  return Math.round(vacationDays * 100) / 100;
}
