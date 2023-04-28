// BEGIN
function simple(number)
{
	if (number <= 1) {
		return false;
	}
	for (let i = 2; i < number; i++) {
		if ((number % i) === 0) {
		return false;
		}
	}
	return true;
}
const sayPrimeOrNot = (number) =>{
	simple(number) ? console.log('yes') : console.log('no');
}
export default sayPrimeOrNot;
// END