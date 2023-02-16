/**
 * title: Count number of times n divides by 2 before reaching 1
 * date: 31/10/2022
 * link: -
 * ============================================================
 * task:
 * Write a function which takes a number, n, and repeatedly divides it by 2 until the result is 1 or smaller.
 * It should return the count of the number of divisions that were made.
 * You can assume n will always be greater than 0.
 * The function should be called roughLog2.
 * ============================================================
 * PROGRAM:
 * declare a variable, COUNT to equal 0
 * WHILE n is divisable by 2
 *  n is equal to (n divided by 2)
 *  count increases by 1
 * END WHILE
 * return COUNT
 * ============================================================
 * Adds together two numbers
 * @param n - input number always greater than 0
 * @returns a number
 */
function roughLog2(n: number): number {
  let count = 0;
  while (n % 2 === 0) {
    n = n / 2;
    count++;
  }
  return count;
}

export default roughLog2;
