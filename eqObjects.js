const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');


const eqObjects = function(object1, object2) {
  const newObject1 = Object.keys(object1);
  const newObject2 = Object.keys(object2);

  if (newObject1.length !== newObject2.length) {
    return false;
  }
  for (const element in object1) {
    if (object1[element] !== object2[element]) {
        if (Array.isArray(object1[element]) === Array.isArray(object2[element])) {
          const result = eqArrays(object1[element], object2[element]);
          return result;
        }
      return false;
    }
  }
  return true;
};



const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };


//console.log(eqObjects(cd, dc)); // => true
//console.log(assertEqual(eqObjects(cd, dc), true)); // => true

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true


// exports eqObjects() function
module.exports = eqObjects;