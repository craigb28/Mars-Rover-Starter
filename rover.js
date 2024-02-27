const Message = require("./message");
const Command = require("./command");

class Rover {
  constructor(position) {
    this.position = position;
    this.mode = "NORMAL";
    this.generatorWatts = 110;
  }
  receiveMessage(message) {
    const resultsArray = [];
    const outputObject = {
      message: message.name,
      results: resultsArray,
    };
    const notCompletedObject = { completed: false };

    for (let i = 0; i < message.commands.length; i++) {
      if (message.commands[i].commandType === "MODE_CHANGE") {
        this.mode = message.commands[i].value;
        resultsArray.push({ completed: true });
      } else if (message.commands[i].commandType === "STATUS_CHECK") {
        const roverStatus = {
          mode: this.mode,
          generatorWatts: this.generatorWatts,
          position: this.position,
        };
        resultsArray.push({ completed: true, roverStatus });
      } else if (message.commands[i].commandType === "MOVE") {
        if ((this.mode === "LOW_POWER")) {
          resultsArray.push({ completed: false });
        } else if ((this.mode === "NORMAL")) {
          this.position = message.commands[i].value;
          resultsArray.push({ completed: true });
        }
      }
    }
    return outputObject;
  }
}

module.exports = Rover;

// let rover = new Rover(100);
// let commands = [
//   // new Command("MOVE", 4321),
//   // new Command("STATUS_CHECK"),
//   new Command("MODE_CHANGE", "LOW_POWER"),
//   new Command("MODE_CHANGE", "LOW_POWER"),
//   new Command("MODE_CHANGE", "LOW_POWER"),
//   // new Command("MOVE", 3579),
//   // new Command("STATUS_CHECK"),
// ];
// let message = new Message("TA power", commands);
// let response = rover.receiveMessage(message);

// console.log(response);
// //console.log(JSON.stringify(response, null, 2));

// console.log(commands);

let rover = new Rover(5);
let commands = [
  new Command("MODE_CHANGE", "LOW_POWER"),new Command("MOVE", 101),
];
let message = new Message("Example_message", commands);
const received = rover.receiveMessage(message);
console.log(received); // Output the received value to the console
