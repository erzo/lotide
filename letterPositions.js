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



const letterPositions = function(sentence) {
  const results = {};

  for (let x = 0; x < sentence.length; x++) {
    //console.log(letter);
    if (sentence[x] === ' ') {
      //if space then it will skip to next element
    } else {
      if (results[sentence[x]]) {
        results[sentence[x]].push(x);
        //console.log(results);
      } else {
          results[sentence[x]] = [x];
        } 
    }
  }
  return results;
};


//assertArraysEqual(letterPositions("hello").e, [1]);
console.log(letterPositions(("lighthouse in the house")));