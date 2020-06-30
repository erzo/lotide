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

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


const results1 = map(words, word => word[0]);
//console.log(assertArraysEqual(results1, words));


//exports map() function
module.exports = map;
