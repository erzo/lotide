const assertEqual = function(actual, expected) {
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  
};


const tail = function(words) {
  let newArray = [];
  for (let x = 1; x < words.length; x++) {
    newArray.push(words[x]);
  }
  return newArray;
}


const words = ["Yo Yo", "Lighthouse", "Labs"];
let result = tail(words); // no need to capture the return value since we are not checking it
console.log(result);
assertEqual(words.length, result); // original array should still have 3 elements!
