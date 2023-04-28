// BEGIN
const groupBy = (users, property) => {
    const result = {};
    for (const item of users) {
        const test = item[property];
        if (!result.hasOwnProperty(test)) {
            result[test] = [item];
        } else {
            result[test].push(item)
        }
    }
    return result
}
export default groupBy;
// END