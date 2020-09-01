const EventEmitter = require("event").EventEmitter;

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
