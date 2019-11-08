const getFiniteNumbers = array => array.filter(el => Number.isFinite(el));

const getFiniteNumbersV2 = array => array.filter(el => isFinite(el));

const getNaN = array => array.filter(el => Number.isNaN(el));

const getNaNV2 = array => array.filter(el => isNaN(el));

const getIntegers = array => array.filter(el => Number.isInteger(el));
