let numbers = [1, 3, 5];

function findGreaterThan(x, values){
    return values.every(function (value) {
        return value > x;
    });
}

//TESTING
let myArray = [5, 4, 7, 9];

//TRUE
console.log(findGreaterThan(3, myArray));
//FALSE
console.log(findGreaterThan(10, myArray));

