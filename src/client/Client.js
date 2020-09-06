const fs = require("fs");
const path = require("path");

const { EventEmitter } = require("events");

class Client extends EventEmitter {
 constructor(options = {}) {
  super();
  this.options = options;
 }
 test(message){
  message.channel.send = console.log;
  this.emit("message", message);
 }
 get bbb(){
  return this.readMy;
 }
}

module.exports = Client;
