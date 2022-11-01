function isValidIP(ipAddress) {
  let splitAddress = ipAddress.split(".");
  // console.log("Split address: ", splitAddress);

  if (
    checkLengthValidity(splitAddress) &&
    !checkForZeros(splitAddress) === false &&
    checkRange(splitAddress) &&
    !checkForSpaces(ipAddress) === false
  ) {
    return true;
  } else {
    return false;
  }
}

function checkForZeros(splitAddress) {
  for (let value of splitAddress) {
    //console.log("length:", value.length) //Length of the current string
    //     console.log("value.length != 1 returns:", value.length != 1)
    if (value.charAt(0) === "0" && value.length != 1) {
      //if the character at the first index is 0 AND there are numbers after the 0 then...
      return false;
    }
  }
}

function checkRange(splitAddress) {
  let convertedString = [];

  for (let number of splitAddress) {
    if (!number.includes("e")) {
      convertedString.push(Number(number));
    }
    if (number.includes("e")) {
      convertedString.push(NaN);
    }
  }

  console.log("Converted string:", convertedString);

  if (convertedString.includes(NaN)) {
    return false;
  }
  for (let term of convertedString) {
    if (term < 0 || term > 255) {
      return false;
    }
  }
}

function checkLengthValidity(splitAddress) {
  if (
    splitAddress.length == 4 &&
    !splitAddress.includes("") &&
    !splitAddress.includes(" ")
  ) {
    return true;
  }
}

function checkForSpaces(ipAddress) {
  ipAddress.split("");
  console.log(ipAddress);
  if (ipAddress.includes(" ")) {
    return false;
  }
}

export default isValidIP;
