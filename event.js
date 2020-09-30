var event = require('events')
var eventemitter = new event.EventEmitter
eventemitter.on("play",function()
{
console.log("player one start play")
})
eventemitter.addListener("play",function()
{
console.log("player 2 start playing")
})

eventemitter.emit("play")
