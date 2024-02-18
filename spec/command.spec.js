const Command = require("../command.js");

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Command class", function () {
  it("throws error if command type is NOT passed into constructor as the first parameter", function () {
    expect(function () {
      new Command();
    }).toThrow(new Error("Command type required."));
  });
});

describe("Constructor sets command type", function () {
  it("checks that the constructor in the Command class correctly sets the commandType property in the new object.", function () {
    expect(new Command("example_command", "example_value").commandType).toBe(
      "example_command"
    );
  });
});

describe("Constructor sets value type", function () {
  it("checks that the constructor in the Command class correctly sets the value property in the new object.", function () {
    expect(new Command("example_command", "example_value").value).toBe(
      "example_value"
    );
  });
});
