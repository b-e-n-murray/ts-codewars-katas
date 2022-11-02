import roughLog2 from "./count-divisions";

// delete the ".skip"
test.skip("odd number", () => {
  expect(roughLog2(3)).toBe(0);
});

test.skip("even number", () => {
  expect(roughLog2(64)).toBe(6);
});
