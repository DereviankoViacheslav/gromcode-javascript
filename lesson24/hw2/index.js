function getDiff(startDate, endDate) {
    const diffInMilliseconds = Math.abs(Date.parse(endDate) - Date.parse(startDate));

    const MILLISECONDS_PER_MINUTE = 60 * 1000;
    const MILLISECONDS_PER_HOUR = 60 * MILLISECONDS_PER_MINUTE;
    const MILLISECONDS_PER_DAY = 24 * MILLISECONDS_PER_HOUR;

    const countDays = Math.trunc(diffInMilliseconds / MILLISECONDS_PER_DAY);
    const countDaysInMilliseconds = countDays * MILLISECONDS_PER_DAY;

    const restOfDayInMilliseconds = diffInMilliseconds - countDaysInMilliseconds;

    const countHours = Math.trunc((restOfDayInMilliseconds) / MILLISECONDS_PER_HOUR);
    const restOfHourInMilliseconds = restOfDayInMilliseconds - (countHours * MILLISECONDS_PER_HOUR);

    const countMinutes = Math.trunc((restOfHourInMilliseconds) / MILLISECONDS_PER_MINUTE);
    const countSeconds = Math.trunc(
        (restOfHourInMilliseconds - (countMinutes * MILLISECONDS_PER_MINUTE)) / 1000);

    return `${countDays}d ${countHours}h ${countMinutes}m ${countSeconds}s`;
}

// const start = new Date(2005, 5, 6, 7, 55, 10);
// const end = new Date(2006, 1, 7, 8, 15, 45);

// console.log(getDiff(start, end));

export {
    getDiff
};