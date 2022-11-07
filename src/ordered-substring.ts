/*
Given two arrays of strings a1 and a2 return a sorted array r 
in lexicographical order of the strings of a1 which are substrings of strings of a2.
=======================================================
PROGRAM   returnOrderedSubstrings
PARAMS:
    an array of strings, ARRAY1
    another array of strings, ARRAY2
    RETURNS
    an array of strings, containing lexicographically ordered substrings from ARRAY1 that exist in ARRAY2
    ====================================================
    Create a new variable, an empty string, call it CURRENT
    Create a new variable, a number, call it INDEX
    Create a new variable, an empty array of strings, call it SUBSTRING_ARRAY
    Set INDEX to 0
    Set CURRENT to the string at index [INDEX] of ARRAY1
    FOR   each STRING of ARRAY2
    IF    STRING includes CURRENT 
    push CURRENT into SUBSTRING_ARRAY
    increase INDEX by 1
    ENDIF.
    ENDFOR.
    return SUBSTRING_ARRAY ordered alphabetically
    ==================================================== */
function inArray(array1: string[], array2: string[]) {
  let substringArray: string[] = [];
  for (let word of array1) {
    for (let string of array2) {
      if (string.includes(word) && !substringArray.includes(word)) {
        substringArray.push(word);
      }
    }
  }
  return substringArray.sort();
}
export default inArray;
