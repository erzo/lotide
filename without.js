
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
  const x = eqArrays(actual, expected);
  //console.log(x);
  if (x) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  
};



const without = function(array, removedValues) {
  const newArray = [];

  for (y = 0; y < array.length; y++) {
    const value = array[y];
    let found = false;
    for (x = 0; x < removedValues.length; x++) {
      if (removedValues[x] === value) {
        found = true;
      }
    }
    if (!found) {
      newArray.push(value);
    }
  }
  return newArray;
};
  





const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));