import isValidIP from "./ip-address-validity";

test.skip("all zeros", () => {
  expect(isValidIP("0.0.0.0")).toBe(true);
});
test.skip("empty character", () => {
  expect(isValidIP(" 1.2.3.4")).toBe(false);
});
test.skip("only three values", () => {
  expect(isValidIP("222.1.13")).toBe(false);
});
test.skip("first character zero", () => {
  expect(isValidIP("023.250.024.13")).toBe(false);
});
test.skip("all zeros", () => {
  expect(isValidIP("0.0.0.0")).toBe(true);
});
test.skip("value exceeds range", () => {
  expect(isValidIP("123.200.300.13")).toBe(false);
});
test.skip("letter input", () => {
  expect(isValidIP("abc.def.ghi.jkl")).toBe(false);
});
test.skip("mixed inputs including e", () => {
  expect(isValidIP("1e0.1e1.1e2.2e2")).toBe(false);
});
test.skip("vacant value", () => {
  expect(isValidIP("27.196..140")).toBe(false);
});
test.skip("includes backslash n", () => {
  expect(isValidIP("1.2.3.4\n       ")).toBe(false);
})

