import { calculateProRataVacationDays, Employment } from "./vacation-days";

test("full year 100% employment gives all vacation days", () => {
  // Arrange
  const fullTime: Employment = {
    startDate: new Date(Date.parse("2025-01-01 00:00:00+01:00")),
    untilDate: new Date(Date.parse("2025-12-31 23:59:59+01:00")),
    percentage: 100,
    vacationDays: 25,
  };
  const expected = 25;

  // Act
  const actual = calculateProRataVacationDays(fullTime);

  // Assert
  expect(actual).toBe(expected);
});

test("half year 50% employment gives half of vacation days", () => {
  // Arrange
  const partTime: Employment = {
    startDate: new Date(Date.parse("2025-01-01 00:00:00+01:00")),
    untilDate: new Date(Date.parse("2025-06-30 23:59:59+01:00")),
    percentage: 50,
    vacationDays: 25,
  };
  const expected = 6.25; 

  // Act
  const actual = calculateProRataVacationDays(partTime);

  // Assert
  expect(actual).toBeCloseTo(expected, 2);
});
