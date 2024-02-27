const Command = require("./spec/command.spec");

class Message {
   constructor(name="", commands=[]) {
      this.name = name;
      if (!name) {
        throw Error("Message name required.");
      }
      this.commands = commands;
    }
}

module.exports = Message;