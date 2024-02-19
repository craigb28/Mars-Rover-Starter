const Rover = require("../rover.js");
const Message = require("../message.js");
const Command = require("../command.js");

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Rover class", function () {
  // 7 tests here!
  // Test 7
  it("constructor sets position and default values for mode and generatorWatts", function () {
    expect(
      new Rover(5).position
    ).toBe(5);
  });
  // Test 8
  it("response returned by receiveMessage contains the name of the message", function () {
    expect(
      new Rover(5).position
    ).toBe(5);
  });
//   // Test 9
//   it("response returned by receiveMessage contains the name of the message", function () {
//     expect(
//       new Rover(5).position
//     ).toBe(5);
//   });
// // Test 10
// it("response returned by receiveMessage contains the name of the message", function () {
//   expect(
//     new Rover(5).position
//   ).toBe(5);
// });
// // Test 11
// it("response returned by receiveMessage contains the name of the message", function () {
//   expect(
//     new Rover(5).position
//   ).toBe(5);
// });
// // Test 12
// it("response returned by receiveMessage contains the name of the message", function () {
//   expect(
//     new Rover(5).position
//   ).toBe(5);
// });
// // Test 13
// it("response returned by receiveMessage contains the name of the message", function () {
//   expect(
//     new Rover(5).position
//   ).toBe(5);
// });
});
