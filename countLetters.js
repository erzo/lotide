const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  
};

const countLetters = function (stringSentence) {
  const result = {};
  const noSpaces = stringSentence.split(' ').join('');
  for (let letter of noSpaces) {
    //console.log(letter); 
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};


console.log(countLetters('i am a student a lighthouse labs'));
