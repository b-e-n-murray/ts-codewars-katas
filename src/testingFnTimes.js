for (let i = 10; i <= 100000000; i *= 10) {
  const inputArray = prepareYourInputArray(i);
  const startTime = performance.now();
  removeWithShift(inputArray);
  const stopTime = performance.now();
  const elapsedTime = stopTime - startTime;
  console.log(i, elapsedTime);
}

function prepareYourInputArray(num) {
  let preparedArr = [];
  for (let i = 0; i < num; i++) {
    preparedArr.push(i);
  }
  return preparedArr;
}

function appendWithUnshift(inputArray) {
  return inputArray.unshift(1);
}
function appendWithPush(inputArray) {
  return inputArray.push(1);
}
function removeWithPop(inputArray) {
  return inputArray.pop();
}
function removeWithShift(inputArray) {
  return inputArray.shift();
}
/*## Task
Measure how long it takes to `array.push` a number onto an array of the following lengths.  
Store your data in a notion database or a spreadsheet at sheets.google.com.
10 numbers
100 numbers
1000 numbers
10000 numbers
100000 numbers
1_000_000 numbers
10_000_000 numbers
100_000_000 numbers
<aside>
🚧 warning: If you are generating test input 
data in your program be careful not to measure 
the time it takes to generate those inputs.  
You should only measure the time it takes to run the function we are scrutinising -  `array.push(), in this case.`
</aside>
**What is the relationship between the length of the array (n), and the time to perform the array.push?**/
