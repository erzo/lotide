const eqObjects = function(object1, object2) {
  const newObject1 = Object.keys(object1);
  const newObject2 = Object.keys(object2);

  if (newObject1.length !== newObject2.length) {
    return false;
  }
  for (const element in object1) {
    if (object1[element] !== object2[element]) {
      //console.log(element);
        if (Array.isArray(object1[element]) === Array.isArray(object2[element])) {
          const result = eqArrays(object1[element], object2[element]);
          return result;
        }
      return false;
    }
  }
  return true;
};


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
console.log(assertObjectsEqual(ab, ba)); // => true