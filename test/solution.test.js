var mocha = require("mocha");
var chai = require("chai");
chai.should();

var Solution = require("../src/solution.js");

describe("Get Largest Number", () => {
  it("[10,2] should be 210", () => {
    var sut = new Solution();
    var expected = "210";
    var nums = [10, 2];
    var actual = sut.GetLargestNumber(nums);
    expected.should.be.equal(actual);
  });
});
