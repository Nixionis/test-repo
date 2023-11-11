import caesarCipher from "../caesarCipher";

test("Empty string and empty parameter", () => {
  expect(caesarCipher("")).toBe("");
});

test("Name string and empty parameter", () => {
  expect(caesarCipher("Nixion")).toBe("Nixion");
});

test("String shift to 5", () => {
  expect(caesarCipher("Nixion", 5)).toBe("Sncnts");
});

test("String shift to -5", () => {
  expect(caesarCipher("Nixion", -5)).toBe("Idsdji");
});

test("String with symbols and punctuation and shift to 5", () => {
  expect(caesarCipher("!Nixion(&), test?", 5)).toBe("!Sncnts(&), yjxy?");
});

test("String with different case and shift to 5", () => {
  expect(caesarCipher("NiXIon", 5)).toBe("SnCNts");
});

test("String with edge letters and shift to -5", () => {
  expect(caesarCipher("AbcdxyZ", -5)).toBe("VwxystU");
});
