/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum WeekDays {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}
function isWeekend(day: WeekDays): boolean {
  if (day === WeekDays.SATURDAY || day === WeekDays.SUNDAY) {
    return true;
  }
  return false;
}
