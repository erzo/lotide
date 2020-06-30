const eqObjects = require('./eqObjects');


const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;
  let x = eqObjects(actual, expected);
  if (x === false) {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
  
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
//console.log(assertObjectsEqual(ab, ba)); // => true


// export assertObjectEquals() function
module.exports = assertObjectsEqual;