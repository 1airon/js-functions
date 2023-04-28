// BEGIN
const getChildren = (users) => {
    return users.reduce((acc, user) => {
      return acc.concat(user.children);
    }, []);
  };
  
  export default getChildren;
// END