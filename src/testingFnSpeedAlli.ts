function prepareYourInputArray(num: number): number[] {
    return Array(num);
  }
  
  function ourFunction(numArr: number[]): number[] {
    numArr.push(1);
    return numArr;
  }
  
  function checkPerformance() {
    const numArr = [10, 100, 1000, 10_000, 100_000, 1_000_000, 10_000_000, 100_000_000];
    for (const num of numArr) {
      const inputArray = prepareYourInputArray(num);
      const startTime = performance.now();
      ourFunction(inputArray);
      const stopTime = performance.now();
      const elapsedTime = stopTime - startTime;
      console.log(`push(${num}): `, { elapsedTime });
    }
  }
  
checkPerformance()