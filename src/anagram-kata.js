/*Write a function, `isAnagram` , which takes two strings 
and returns a boolean indicating whether or not the 
two strings are anagrams of each other - 
i.e. where each can be formed as a rearrangement of the letters of the other, with no letters left over.
-
The strings are guaranteed to contain only characters a-z. */
//===============================================================
/* FUNCTION  isAnagram
Params: stringA, stringB
Returns: boolean
=========================
IF  stringA length != stringB length
    RETURN false
    ENDIF.

set stringAObject to countLetters(stringA) // {y: 3, i: 4} example
set stringBObject to countLetters(stringB) // {i: 4, y: 3} example

IF areEqual(stringAObject, stringBObject) returns true
    RETURN true
    ENDIF.
ELSE
    RETURN false
    ENDELSE.
=========================
FUNCTION    countLetters()
PARAMS: a string
RETURNS: Object
===============
set stringAObject to {}
FOR     each letter of string
    IF letter does not exist in object as a key
   create new KV pair in stringAObject and set its value to 1
   ELSE key.letter ++

RETURN object whatver it is blah blah
========================== 
FUNCTION    areEqual
PARAMS: stringAObject, an obj, stringBObject, another obj
RETURNS:    boolean
================
FOR     each key of stringAObject
    IF  key does not exist stringBObject
        return false
    IF  key's value is NOT equal to the value of the same key in stringBObject
        return false
    ENDIF
        return true
ENDFOR
================== */

function isAnagram(stringA, stringB) {
  if (stringA.length !== stringB.length) {
    return false;
  }
  const stringAObject = countLetters(stringA); // {y: 3, i: 4} example
  const stringBObject = countLetters(stringB); // {i: 4, y: 3} example

  return areEqual(stringAObject, stringBObject);
}
console.log(isAnagram("abc", "cba"));

// helper function
function countLetters(string) {
  const stringObject = {};
  for (let letter of string) {
    if (stringObject.letter === undefined) {
      //or key in object
      stringObject[letter] = 1;
    } else {
      stringObject[letter]++;
    }
  }
  return stringObject;
}
// helper function 2
function areEqual(stringAObject, stringBObject) {
  for (let key in stringAObject) {
    if (!stringBObject[key]) {
      return false;
    }
    if (stringAObject.key !== stringBObject.key) {
      return false;
    }
  }
  return true;
}
