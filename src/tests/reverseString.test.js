import reverseString from "../reverseString";

test("One word", () => {
  expect(reverseString("normal")).toBe("lamron");
});

test("One word capitalized", () => {
  expect(reverseString("Normal")).toBe("lamroN");
});

test("Two words", () => {
  expect(reverseString("one two")).toBe("owt eno");
});

test("Word after non-alphabetic symbols", () => {
  expect(reverseString("!(test)")).toBe(")tset(!");
});

test("Empty string", () => {
  expect(reverseString("")).toBe("");
});

test("Only symbols", () => {
  expect(reverseString("?!)(")).toBe("()!?");
});
