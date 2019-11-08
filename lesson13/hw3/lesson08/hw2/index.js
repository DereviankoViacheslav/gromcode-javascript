export const getAdults = obj => {
    const resultObj = {};
    for (const key in obj) {
        if (+obj[key] >= 18) {
            resultObj[key] = obj[key];
        }
    }
    return resultObj;
}
