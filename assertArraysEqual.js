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

/*
const assertArraysEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  
};


assertArraysEqual(eqArrays([1,2,3], [1,2,3]), true);
*/



const assertArraysEqual = function(actual, expected) {
  let x = eqArrays(actual, expected);
  //console.log(x);
  if (x === false) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  
};

assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual([1,7,3], [1,2,3]);
assertArraysEqual([1,2,3], [1,2]);
assertArraysEqual([1,2,3,4], [1,2,3]);
assertArraysEqual([2,3,4], [2,3,4]);

