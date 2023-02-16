export function splitTheBill(x: { [k: string]: number }): {
  [k: string]: number;
} {
  let billTotal = 0;
  for (const person of x) {
    billTotal += person;
  }
  const evenPayments = billTotal / 3;
  for (let expenditure of x) {
    if (expenditure < evenPayments) {
      expenditure = evenPayments - expenditure;
    } else if (expenditure > evenPayments) {
      expenditure = expenditure - evenPayments;
    }
  }
  return x;
}
