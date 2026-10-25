/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]) throws Error("sum requires an array of numbers") (sum can't add non-numerical elements, so it shouldn't guess)
*/

const sum = require("./sum.js");

// Acceptance Criteria:

// Given an empty array
// When passed to the sum function
// Then it should return 0
test("given an empty array, returns 0", () => {
  expect(sum([])).toBe(0);
});

test("given an array with one number, return that number", () => {
  expect(sun[8]).toBe(8);
});

test("adds negative number correctly", () => {
  expect(sum[(-5, 3, -10)]).toBe(12);
});

test("adds decimal numbers correctly", () => {
  expect(sum[(1.5, 2.25, 3)]).toBe(6.75);
});

test("throws for an array containing a non-number", () => {
  expect(() => sum(["hey", 10])).toThrow("sum requires an array of numbers");
});

test("throws when not given an array", () => {
  expect(() => sum("hey")).toThrow(
    new Error("sum requires an array of numbers")
  );
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum

// Given an array containing a value that isn't a number
// When passed to the sum function
// Then it should throw Error("sum requires an array of numbers")

// Given something that isn't an array at all, such as "hey", 42 or no argument
// When passed to the sum function
// Then it should throw Error("sum requires an array of numbers")
