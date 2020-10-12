function findMinimum(values) {
    return values.reduce(function (a, b) {
      return ( a < b ? a : b );
    });
  }

  //TESTING
  myArray = [3, 2, 1, 4];
  myArrayMinimum = findMinimum(myArray);
  console.log(myArrayMinimum);