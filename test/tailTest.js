const tail = require('../tail');
const assertEqual = require('../assertEqual');

const words = ["Yo Yo", "Lighthouse", "Labs"];
let result = tail(words);
console.log(result);
assertEqual(words.length, result); // original array should still have 3 elements!
assertEqual(words, result);