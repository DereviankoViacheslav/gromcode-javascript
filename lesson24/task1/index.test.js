import { dayOfWeek } from './index';

const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];
const currentDate = new Date();
const currentDayOfWeek = currentDate.getDay();

it('should get current day of the week', () => {
    const result = dayOfWeek(currentDate, 0);
    console.log(result, '1 ' + weekDays[currentDayOfWeek]);

    expect(result).toEqual(weekDays[currentDayOfWeek]);
});

it('should get next day of the week', () => {
    const result = dayOfWeek(currentDate, 1);
    const nextDayOfWeek = (currentDayOfWeek === 6) ? 0 : currentDayOfWeek + 1;
    console.log(result, '2 ' + weekDays[nextDayOfWeek]);

    expect(result).toEqual(weekDays[nextDayOfWeek]);
});

it('should get previous day of the week', () => {
    const result = dayOfWeek(currentDate, -1);
    const previousDayOfWeek = (currentDayOfWeek === 0) ? 6 : currentDayOfWeek - 1;
    console.log(result, '3 ' + weekDays[previousDayOfWeek]);

    expect(result).toEqual(weekDays[previousDayOfWeek]);
});
