const assertEqual = require('./assertEqual');


const eqArrays = function (firstArray, secondArray) {
  if (firstArray.length !== secondArray.length){
    return false;
  }
  for (let x = 0; x < firstArray.length; x++){
    const leftElement = firstArray[x];
    const rightElement = secondArray[x];
    if (leftElement !== rightElement){
      return false;
    }
  }
  return true;
};

// console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false


// console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => should PASS


// exports eqArrays() function
module.exports = eqArrays;