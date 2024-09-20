/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

function merge(leftArr, rightArr) {
  let sortedArr = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
    sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }

  return sortedArr.concat(leftArr, rightArr);
}

const mergeSort = (nums) => {
  // code goes here
  if (nums.length === 1) {
    return nums;
  }

  let midIndex = Math.ceil(nums.length/2);
  let leftArr = nums.slice(0, midIndex);
  let rightArr = nums.slice(midIndex);

  leftArr = mergeSort(leftArr);
  rightArr = mergeSort(rightArr);

  return merge(leftArr, rightArr);
};

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
