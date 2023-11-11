import analyzeArray from "../analyzeArray";

test("Empty array", () => {
  expect(analyzeArray([])).toEqual({
    average: null,
    min: null,
    max: null,
    length: 0,
  });
});

test("Not array", () => {
  expect(analyzeArray("test")).toEqual({
    average: null,
    min: null,
    max: null,
    length: 0,
  });
});

test("Array with one element", () => {
  expect(analyzeArray([5])).toEqual({
    average: 5,
    min: 5,
    max: 5,
    length: 1,
  });
});

test("Array with six elements", () => {
  expect(analyzeArray([3, 8, 1, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
