const Rover = require("../rover.js");
const Message = require("../message.js");
const Command = require("../command.js");

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Rover class", function () {
  // Test 7
  it("constructor sets position and default values for mode and generatorWatts", function () {
    expect(new Rover(5).position).toBe(5);
    expect(new Rover().mode).toBe("NORMAL");
    expect(new Rover().generatorWatts).toBe(110);
  });

  // Test 8
  it("response returned by receiveMessage contains the name of the message", function () {
    let commands = [
      new Command("example_command_one"),
      new Command("example_command_two"),
    ];
    let message = new Message("example_name", commands);
    expect(new Rover(5).receiveMessage(message).message).toBe("example_name");
  });

  //   // Test 9
  it("response returned by receiveMessage includes two results if two commands are sent in the message", function () {
    let commands = [new Command("MODE_CHANGE"), new Command("MODE_CHANGE")];
    let message = new Message("example_name", commands);
    let rover = new Rover(5);
    expect(rover.receiveMessage(message).results.length).toEqual(2);
  });

  // // Test 10
  it("responds correctly to the status check command", function () {
    let rover = new Rover(5);
    let commands = [new Command("STATUS_CHECK")];
    let message = new Message("Example_message", commands);
    expect(rover.receiveMessage(message).results[0]).toEqual({
      completed: true,
      roverStatus: { mode: "NORMAL", generatorWatts: 110, position: 5 },
    });
  });

  // // Test 11
  it("responds correctly to the mode change command", function () {
    let rover = new Rover(5);
    let commands = [new Command("MODE_CHANGE", "LOW_POWER")];
    let message = new Message("example_name", commands);
    let messageReceived = rover.receiveMessage(message);
    expect(rover.mode).toEqual("LOW_POWER");
  });
  it("responds correctly to the mode change command", function () {
    let rover = new Rover(5);
    let commands = [new Command("MODE_CHANGE", "NORMAL")];
    let message = new Message("example_name", commands);
    let messageReceived = rover.receiveMessage(message);
    expect(rover.mode).toEqual("NORMAL");
  });

  // // Test 12
  it("responds with a false completed value when attempting to move in LOW_POWER mode", function () {
    let rover = new Rover(5);
    let commands = [new Command("MODE_CHANGE", "LOW_POWER"), new Command("MOVE", 101)];
    let message = new Message("example_name", commands);
    let messageReceived = rover.receiveMessage(message);
    expect(messageReceived.results).toEqual([{ completed: true }, { completed: false }]);
  });
  // });

  // // Test 13
  it("responds with the position for the move command", function () {
    let rover = new Rover(5);
    let commands = [new Command("MOVE", 2500)];
    let message = new Message("example_name", commands);
    let messageReceived = rover.receiveMessage(message);
    expect(rover.position).toBe(2500);
  });
});
