const fs = require("fs");
const path = require("path");

const { EventEmitter } = require("events");

class client extends EventEmitter {
 constructor(client, options) {
  super();
  this.client = client;
  this.options = options;
  this.ready = true; 
 }
 aaa(message){
  //code
  this.emit("message", message);
 }
 get bbb(){
  return this.readMy;
 }
}
