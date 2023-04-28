import _ from 'lodash';

// BEGIN
const getAverage = (...numbers) => {
   if(numbers.length !== 0) {
    let sum = 0; 
    for (let i = 0; i < numbers.length; i += 1) { 
      sum += numbers[i]; 
    }
    return sum / numbers.length; 
}
    else return null;
  };
  export default getAverage;
// END