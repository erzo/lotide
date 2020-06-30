const findKey = require("./findKey");

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  
};


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = function (tvShows, showName) {
  const objArray = Object.keys(tvShows);
  console.log(objArray);
  for (const i in objArray) {
    let show = objArray[i];
    console.log(`${objArray[show]} : ${showName} : ${tvShows[show]} : ${show}`);
    if (tvShows[show] === showName) {
      return show;
    }
  }
};


//assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
//assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

//console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));


//exports findKeyByValue() function
module.exports = findKeyByValue;