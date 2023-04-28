import {sortBy} from 'lodash';

// BEGIN
const takeOldest = (users, returnUsers = 1) => {
    const sorted = sortBy(users, user => Date.parse(user.birthday));
    return sorted.slice(0, returnUsers);
    };
    export default takeOldest;
// END