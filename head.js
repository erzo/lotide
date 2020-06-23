const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    /*if (actual === undefined) {
      return console.log('undefined');
    } */
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    
  } else if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  
};

const head = function(firstNum) {
  return firstNum[0];
}

assertEqual(head([5,6,7]), 6);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([2]), 3);
assertEqual(head([]), 3);