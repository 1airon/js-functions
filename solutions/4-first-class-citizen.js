const run = (text) => {
    // BEGIN
    function takeLast(str, n) {
      if (str === "" || str.length < n) {
        return null;
      } else {
        return str.slice(-n).split("").reverse().join("");
      }
    }
    // END
  
    return takeLast(text, 4);
  };
  
export default run;