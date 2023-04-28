// BEGIN
const humanReadableDate = (...dates) => {
    if (!dates.length) return [];
  
    return dates.map(date => {
      const [year, month, day] = date;
      const newDate = new Date(year, month, day);
      return newDate.toDateString();
    });
  };
  
  export default humanReadableDate;
// END