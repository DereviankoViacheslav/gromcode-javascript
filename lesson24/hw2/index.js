function getDiff(startDate, endDate) {
    const diffDates = Math.abs(Date.parse(endDate) - Date.parse(startDate));
    const SECONDS_PER_MINUTE = 60 * 1000;
    const SECONDS_PER_HOUR = 60 * SECONDS_PER_MINUTE;
    const SECONDS_PER_DAY = 24 * SECONDS_PER_HOUR;
    const cntDays = Math.trunc(diffDates / SECONDS_PER_DAY);
    const cntHours = Math.trunc((
        diffDates - (cntDays * SECONDS_PER_DAY)) / SECONDS_PER_HOUR);
    const cntMinutes = Math.trunc((
        diffDates - (cntDays * SECONDS_PER_DAY) - 
        (cntHours * SECONDS_PER_HOUR)) / SECONDS_PER_MINUTE);
    const cntSeconds = Math.trunc((
            diffDates - (cntDays * SECONDS_PER_DAY) -
            (cntHours * SECONDS_PER_HOUR) -
            (cntMinutes * SECONDS_PER_MINUTE)) / 1000);
    
    return `${cntDays}d ${cntHours}h ${cntMinutes}m ${cntSeconds}s`;
}

export {
    getDiff
};





/*Напишите функцию, которая вернет время в Гринвиче

Основные требования:
Функция должна экспортироваться под именем getDiff
Сигнатура: getDiff(startDate, endDate), где startDate, endDate - объекты даты.
Функция должна вернуть разницу в формате 275d 2h 58m 16s
Входящие даты должны остаться неизменной
Функция должна искать разницу, не зависимо от того, какая дата из переданных меньше*/