const Message = require("../message.js");
const Command = require("../command.js");

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Message class", function () {
  // Test 4
  it("throws error if a name is NOT passed into the constructor as the first parameter", function () {
    expect(function () {
      new Message();
    }).toThrow(new Error("Message name required."));
  });

  // Test 5
  it("constructor sets name.", function () {
    expect(
      new Message("example_name", ["command1", "command2", "command3"]).name
    ).toBe("example_name");
  });

  // Test 6
  it("new Message object contains a commands array passed into the constructor as the 2nd argument.", function () {
    expect(
      new Message("example_name", ["command1", "command2", "command3"]).commands
    ).toStrictEqual(["command1", "command2", "command3"]);
  });
});
