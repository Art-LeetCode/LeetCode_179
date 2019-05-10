class Solution {
  constructor() {}
  GetLargestNumber(numbers) {
    let sortList = numbers.sort(function(x, y) {
      let xFirst = x.toString() + y.toString();
      let yFirst = y.toString() + x.toString();
      return yFirst - xFirst;
    });
    let result = sortList.reduce((a, b) => {
      if (a == b) return a.toString();
      return a.toString() + b.toString();
    });
    return result;
  }
}

module.exports = Solution;
