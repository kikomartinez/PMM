const values = ["Ana", 2, "Javi", 5, "Roberto", 7, "Vanessa", 10];

function deleteIfNotStringAndShow(valuesArray){
    let filteredArray = values.filter(checkIfTypeIsString);
    console.log(filteredArray);
    return filteredArray;
}

function deleteIfNotOddNumber(valuesArray){
    let filteredArray = values.filter(checkIfNumberAndOdd);
    console.log(filteredArray);
    return filteredArray;
}

function checkIfTypeIsString(value){
    return typeof value === 'string';
}

function checkIfNumberAndOdd(value){
    return (typeof value === 'number') && (value % 2 !== 0)
}

let filteredArrayStrings = deleteIfNotStringAndShow(values);
let filteredArrayOddNumbers = deleteIfNotOddNumber(values);

