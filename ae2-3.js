function findMinimum(values) {
    return values.reduce(function (a, b) {
      return ( a < b ? a : b );
    });
  }

  //TESTING
  let myArray = [3, 2, 1, 4];
  let myArrayMinimum = findMinimum(myArray);
  console.log(myArrayMinimum);