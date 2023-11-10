import capitalize from "../capitalize";

test("One word", () => {
  expect(capitalize("normal")).toBe("Normal");
});

test("One word already capitalized", () => {
  expect(capitalize("Normal")).toBe("Normal");
});

test("Two words", () => {
  expect(capitalize("one two")).toBe("One two");
});

test("Word after non-alphabetic symbols", () => {
  expect(capitalize("!(test)")).toBe("!(Test)");
});

test("Empty string", () => {
  expect(capitalize("")).toBe("");
});

test("Only symbols", () => {
  expect(capitalize("?!)(")).toBe("?!)(");
});
