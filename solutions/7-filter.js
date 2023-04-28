// BEGIN
export default (users) => {
    const reducer = (acc, user) => {
      const girls = user.friends.filter((friend) => friend.gender === 'female');
      return acc.concat(girls);
    };
    return users.reduce(reducer, []);
  };
// END