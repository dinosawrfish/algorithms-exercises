/*

  Implement a radix sort in a function called radixSort.

  You'll probably need several functions

  You can implement it using a binary or decimal based bucketing but I'd recommend the decimal based buckets because
  it ends up being a lot more simple to implement.

*/

// number = 1391, place=0, longerstNumber=4
//returns 1

function getDigit(number, place, longestNumber) {
  const reverseNumber = number.toString().split("").reverse().join("");
  const digit = reverseNumber.toString()[place];
  if (!digit) {
    return 0;
  }

  return digit;
}

// return 4
function getLongestNumber(array) {
  let biggestNum = 0;

  for (let num of array) {
    if (num > biggestNum) {
      biggestNum = num;
    }
  }

  return biggestNum.toString().length;
}

function radixSort(array) {
  const longestNumber = getLongestNumber(array)

  const buckets = [...Array(10)].map(_ => []);
  // const buckets = Array(10).fill().map(() => []);

  for (i = 0; i < longestNumber; i++) {
    while (array.length) {
      const num = array.shift();
      const digit = getDigit(num, i, longestNumber);
      buckets[digit].push(num);
    }

    for (j = 0; j < buckets.length; j++) {
      while (buckets[j].length) {
        array.push(buckets[j].shift());
      }
    }
  }
  return array;
}

// unit tests
// do not modify the below code
describe("radix sort", function () {
  it("should sort correctly", () => {
    const nums = [
      20,
      51,
      3,
      801,
      415,
      62,
      4,
      17,
      19,
      11,
      1,
      100,
      1244,
      104,
      944,
      854,
      34,
      3000,
      3001,
      1200,
      633
    ];
    const ans = radixSort(nums);
    expect(ans).toEqual([
      1,
      3,
      4,
      11,
      17,
      19,
      20,
      34,
      51,
      62,
      100,
      104,
      415,
      633,
      801,
      854,
      944,
      1200,
      1244,
      3000,
      3001
    ]);
  });
  it("should sort 99 random numbers correctly", () => {
    const fill = 99;
    const nums = new Array(fill)
      .fill()
      .map(() => Math.floor(Math.random() * 500000));
    const ans = radixSort(nums);
    expect(ans).toEqual(nums.sort());
  });
});
