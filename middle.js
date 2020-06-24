const eqArrays = function (firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return false;
  }
  for (let x = 0; x < firstArray.length; x++) {
    const leftElement = firstArray[x];
    const rightElement = secondArray[x];
    if (leftElement !== rightElement) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  let x = eqArrays(actual, expected);
  //console.log(x);
  if (x === false) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  
};

const middle = function(array) {
  newArray = [];
  let arrayHalfLength = Math.floor(array.length / 2);
  //console.log('array:', arrayHalfLength);
  if (array.length < 3) {
    return newArray;
  }
  if (array.length % 2 === 0) {
    newArray.push(array[arrayHalfLength - 1]);
  }

  newArray.push(array[arrayHalfLength]);
  return newArray;
}


console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);