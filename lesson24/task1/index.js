const weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'St', 'Su'];

function dayOfWeek(date, days) {
    const day = date.getDate();
    const dateInFuture = new Date(date).setDate(day + days);
    return weekDays[new Date(dateInFuture).getDay() - 1];
}

console.log(dayOfWeek(new Date(), 1));

export {
    dayOfWeek
};
