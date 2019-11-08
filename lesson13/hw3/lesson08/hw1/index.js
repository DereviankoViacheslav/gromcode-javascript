export const pickProps = (obj, array) => {
    return array.reduce((acc, elem) => {
        for (const key in obj) {
            if (key === elem) {
                acc[elem] = obj[key];
                break;
            }
        }
        return acc;
    }, {});
}
