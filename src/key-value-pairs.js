/*Write a function, `printAllKeyValuePairs(obj)` which takes an object with unknown content and prints to console, one per line, each **key** and **value** in the object.

e.g.:

Given the following object as input, */

const characters = {
  Bruce: "Hulk",
  Peter: "Spiderman",
  Ororo: "Storm"
};

function printAllKeyValuePairs(characters)  {
    for (let key in characters)  {
        console.log(key, characters[key]);
    }
}
console.log(printAllKeyValuePairs(characters))


