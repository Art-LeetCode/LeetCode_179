var mocha = require("mocha");
var chai = require("chai");
chai.should();

var Solution = require("../src/solution.js");

const dataSet = [
  { nums: [10, 2], expected: "210" },
  { nums: [0, 0], expected: "0" },
  { nums: [3, 30, 34, 5, 9], expected: "9534330" },
  { nums: [121, 12], expected: "12121" },
  { nums: [824, 938, 1399, 5607, 6973, 5703, 9609, 4398, 8247], expected: "9609938824824769735703560743981399" }
];
let sut;
beforeEach(() => {
  sut = new Solution();
});
describe("Get Largest Number", () => {
  dataSet.forEach(d => {
    it(`${d.nums.toString()} should be ${d.expected}`, () => {
      var actual = sut.GetLargestNumber(d.nums);
      d.expected.should.be.equal(actual);
    });
  });
});
