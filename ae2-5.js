function multipleFactorial(values){
    return values.map(factorial);
}

function factorial(n) {
	let total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
}

//TESTING
let myArray = [2, 3, 4, 5];
let myArrayFactorials = multipleFactorial(myArray);
console.log(myArrayFactorials);

