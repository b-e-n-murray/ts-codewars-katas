import roughLog2 from "./count-divisions";

// delete the ".skip"
test("odd number", () => {
  expect(roughLog2(3)).toBe(0);
});

test("even number", () => {
  expect(roughLog2(64)).toBe(6);
});
