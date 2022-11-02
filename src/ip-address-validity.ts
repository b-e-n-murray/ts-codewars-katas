function isValidIP(ipAddress: string):boolean {
  let splitAddress = ipAddress.split(".");

  if (
    checkLengthValidity(splitAddress) &&
    checkForZeros(splitAddress) &&
    checkRange(splitAddress) &&
    checkForSpaces(ipAddress)
  ) {
    return true;
  } else {
    return false;
  }
}

function checkForZeros(splitAddress:string[]):boolean {
  for (let value of splitAddress) {
    if (value.charAt(0) === "0" && value.length != 1) {
      return false;
    }
  }
  return true
}

function checkRange(splitAddress:string[]):boolean {
  let convertedString = [];

  for (let number of splitAddress) {
    if (!number.includes("e")) {
      convertedString.push(Number(number));
    }
    if (number.includes("e") || number.includes("\n")) {
      convertedString.push(NaN);
    }
  }

  if (convertedString.includes(NaN)) {
    return false;
  }
  for (let term of convertedString) {
    if (term < 0 || term > 255) {
      return false;
    }
  }
  return true
}

function checkLengthValidity(splitAddress:string[]):boolean {
  if (
    splitAddress.length == 4 &&
    !splitAddress.includes("") &&
    !splitAddress.includes(" ")
  ) {
    return true;
  }
  return false
}

function checkForSpaces(ipAddress:string):boolean {
  ipAddress.split("");
  console.log(ipAddress);
  if (ipAddress.includes(" ")) {
    return false;
  }
  return true
}

export default isValidIP;
