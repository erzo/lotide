const assertEqual = require('./assertEqual');

const tail = function(words) {
  let newArray = [];
  for (let x = 1; x < words.length; x++) {
    newArray.push(words[x]);
  }
  return newArray;
}

module.exports = tail;