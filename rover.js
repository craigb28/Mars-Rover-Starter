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
        if (this.mode === "LOW_POWER") {
          resultsArray.push({ completed: false });
        } else if (this.mode === "NORMAL") {
          this.position = message.commands[i].value;
          resultsArray.push({ completed: true });
        }
      }
    }
    return outputObject;
  }
}

module.exports = Rover;
