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
  it("[0,0] should be 0", () => {
    var sut = new Solution();
    var expected = "0";
    var nums = [0, 0];
    var actual = sut.GetLargestNumber(nums);
    expected.should.be.equal(actual);
  });
  it("[3, 30, 34, 5, 9] should be 9534330", () => {
    var sut = new Solution();
    var expected = "9534330";
    var nums = [3, 30, 34, 5, 9];
    var actual = sut.GetLargestNumber(nums);
    expected.should.be.equal(actual);
  });
  it("[121,12] should be 12121", () => {
    var sut = new Solution();
    var expected = "12121";
    var nums = [121, 12];
    var actual = sut.GetLargestNumber(nums);
    expected.should.be.equal(actual);
  });
  it("[824, 938, 1399, 5607, 6973, 5703, 9609, 4398, 8247] should be 9609938824824769735703560743981399", () => {
    var sut = new Solution();
    var expected = "9609938824824769735703560743981399";
    var nums = [824, 938, 1399, 5607, 6973, 5703, 9609, 4398, 8247];
    var actual = sut.GetLargestNumber(nums);
    expected.should.be.equal(actual);
  });
});
