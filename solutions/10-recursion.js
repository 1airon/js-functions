const sequenceSum = (begin, end) => {
    // BEGIN
      if (begin == end) {
        return begin;
      } else if (begin > end) {
          return NaN;
      }
        return begin + sequenceSum(begin +1, end);
      
    };
    // END
  
export default sequenceSum;
  