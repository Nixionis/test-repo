import calculator from "../calculator";

test("Add different types", () => {
  expect(calculator.add(10, "one")).toBe("Expected to get a numbers!");
});

test("Add two numbers", () => {
  expect(calculator.add(10, 5)).toBe(15);
});

test("Subtract different types", () => {
  expect(calculator.subtract(10, "five")).toBe("Expected to get a numbers!");
});

test("Subtract two numbers", () => {
  expect(calculator.subtract(10, 5)).toBe(5);
});

test("Subtract two negative numbers", () => {
  expect(calculator.subtract(-10, -5)).toBe(-5);
});

test("Multiply different types", () => {
  expect(calculator.multiply("six", 4)).toBe("Expected to get a numbers!");
});

test("Multiply two numbers", () => {
  expect(calculator.multiply(10, 5)).toBe(50);
});

test("Divide different types", () => {
  expect(calculator.divide("six", "4")).toBe("Expected to get a numbers!");
});

test("Divide two numbers", () => {
  expect(calculator.divide(10, 5)).toBe(2);
});
