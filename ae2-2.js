function average(dataArray) {
    if (Array.isArray(dataArray) && dataArray.length){
        return dataArray.reduce((a, b) => a + b) / dataArray.length;
    } 
    else{
        return undefined;
    }    
}

//TESTING
let myArray = [1, 2, 3, 4];
let myArrAyAverage = average(myArray);

let myEmptyArray = [];
let myEmptyArrayAverage = average(myEmptyArray);

console.log(myArrAyAverage);
console.log(myEmptyArrayAverage);