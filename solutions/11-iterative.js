const smallestDivisor = (num) => {
    // BEGIN
      if (num < 1) {
        return NaN;
      } else if (num === 1) {
         return num;
      } else {
          let counter = 2;
        while (num % counter !== 0) {
        counter++;
        }
        return counter;
        }
    // END
  };
  
export default smallestDivisor;
  