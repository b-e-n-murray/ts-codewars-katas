import inArray from "./ordered-substring";

test("contains two, no rearrangement", () => {
  expect(
    inArray(
      ["xyz", "live", "strong"],
      ["lively", "alive", "harp", "sharp", "armstrong"]
    ).toStrictEqual(expect.arrayContaining(["live", "strong"]))
  );
});
test("contains three, with rearrangement", () => {
  expect(
    inArray(
      ["live", "strong", "arp"],
      ["lively", "alive", "harp", "sharp", "armstrong"]
    ).toBe(["arp", "live", "strong"])
  );
});
test("contains no substrings", () => {
  expect(
    inArray(
      ["tarp", "mice", "bull"],
      ["lively", "alive", "harp", "sharp", "armstrong"]
    ).toBe([])
  );
});
