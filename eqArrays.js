const assertEqual = require('./assertEqual');


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

// exports eqArrays() function
module.exports = eqArrays;