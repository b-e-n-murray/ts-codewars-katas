import isValidIP from "./ip-address-validity.js";

test("all zeros", () => {
    expect(isValidIP("0.0.0.0")).toBe(true);
  });
  test("empty character", () => {
    expect(isValidIP(" 1.2.3.4")).toBe(false);
  });
  test("only three values", () => {
    expect(isValidIP("222.1.13")).toBe(false);
  });
  test("first character zero", () => {
    expect(isValidIP("023. 250.024.13")).toBe(false);
  });
  test("all zeros", () => {
    expect(isValidIP("0.0.0.0")).toBe(true);
  });
  test("value exceeds range", () => {
    expect(isValidIP("123.200.300.13")).toBe(false);
  });
  test("letter input", () => {
    expect(isValidIP("abc.def.ghi.jkl")).toBe(false);
  });
  test("mixed inputs including e", () => {
    expect(isValidIP("1e0.1e1.1e2.2e2")).toBe(false);
  });
  test("vacant value", () => {
    expect(isValidIP("27.196..140")).toBe(false);
  });
  