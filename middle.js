const middle = function(array) {
  newArray = [];
  let arrayHalfLength = Math.floor(array.length / 2);
  if (array.length < 3) {
    return newArray;
  }
  if (array.length % 2 === 0) {
    newArray.push(array[arrayHalfLength - 1]);
  }

  newArray.push(array[arrayHalfLength]);
  return newArray;
}


// export middle() function
module.exports = middle;