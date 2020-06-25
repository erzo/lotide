const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  
};


// const eqObjects = function(object1, object2) {
//   let newObject1 = Object.keys(object1);
//   let newObject2 = Object.keys(object2);

//   if (newObject1.length !== newObject2.length) {
//     return false;
//   }
//   for (let x = 0; x < newObject1.length; x++) {
//     const obj1Element = newObject1[x];
//     // const obj2Element = newObject2[x];

//     console.log('obj1Element :' , obj1Element);
//     console.log('obj2Element:', object2[obj1Element]);
//     if (obj1Element === object2[obj1Element]) {
//       console.log('we are here');
//     }

//     // console.log(obj1Element);
//     // console.log(obj2Element);

//     // if (obj1Element !== obj2Element) {
//     //   return false
//     // }
//     return true;
//   }
// };


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
  console.log('line 73');
  return true;
};



const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true
//console.log(assertEqual(eqObjects(cd, dc), true)); // => true

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true