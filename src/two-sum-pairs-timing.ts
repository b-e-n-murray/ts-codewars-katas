export function generateWorstCaseArray(desiredLen: number): {
    arr: number[];
    targetSum: number;
} {
    const arr: number[] = [];
    for (let i = 0; i < desiredLen; i++) {
        arr.push(1);
    }
    arr[arr.length - 1] = 6;
    arr[arr.length - 2] = 4;
    return { arr, targetSum: 10 };
}

// function twoSum(nums: number[], target: number): number[] {
//     let indices: number[] = []
//     for (let number of nums) {
//         for (let secondNumInd = 1; secondNumInd < nums.length; secondNumInd++) {
//             if (target === number + nums[secondNumInd]) {
//                 indices = [nums.indexOf(number), secondNumInd]
//             }
//         }
//     }
//     return indices
// };
function twoSum(nums: number[], target: number): number[] {
    let indices: number[] = []
    while(indices.length === 0) {
    for(let number of nums) {
        for(let secondNumInd = 1; secondNumInd < nums.length ; secondNumInd ++) {
            if(target === number + nums[secondNumInd]) {
                 indices = [nums.indexOf(number), secondNumInd]
            }
        }
    }
    }
    return indices
    };

for (let i = 10; i <= 100000000; i *= 10) {
    const inputArray = generateWorstCaseArray(i)
    const startTime = performance.now();
    twoSum(inputArray.arr, inputArray.targetSum);
    const stopTime = performance.now();
    const elapsedTime = stopTime - startTime;
    console.log(i, elapsedTime);
}

