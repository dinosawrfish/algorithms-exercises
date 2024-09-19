/*

  write a function that accepts an array that only contains
  two types of things: numbers and arrays. those nested arrays
  also only contain numbers and other, nested arrays.

  example: nestedAdd([1, 2, [3]]) = 6
           nestedAdd([[[2]], 1, [1, 3]]) = 7

 */

function nestedAdd(array) {
  // write code here
  let summation = 0;
  for (let item of array) {
    if (typeof(item) == "number") {
      summation += item;
    } else {
      summation += nestedAdd(item);
    }
  }
  return summation;
}

function nestedArray2(array) {
  let summation = 0;
  for (let item of array) {
    if (Array.isArray(item)) {
      summation += nestedArray2(item);
    } else {
      summation += item;
    }
  }
  return summation;
}

test("nested arrays addition", () => {
  expect(nestedAdd([1, 2, 3])).toEqual(6);
  expect(nestedAdd([1, [2], 3])).toEqual(6);
  expect(nestedAdd([[[[[[[[[5]]]]]]]]])).toEqual(5);
  expect(nestedAdd([10, [12, 14, [1], [16, [20]]], 10, 11])).toEqual(94);
});
