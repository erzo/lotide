const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  let x = eqArrays(actual, expected);
  if (x === false) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  
};

//exports assertArraysEqual() function
module.exports = assertArraysEqual;


