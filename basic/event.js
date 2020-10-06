//create and trigger custom event in node js

const events = require("events");
const event= new events.EventEmitter();

const first_event = function(n1,n2){
    console.log(n2*n1);
    event.emit('click2');
    event.emit('click3');
}

const second_event = function(){
    console.log("Second Event Triggered");
}

const third_event = function(){
    console.log("Third Event Triggered");
}
event.on('click2',second_event);
event.on('click3',third_event);
event.on('click',first_event);
event.emit('click',4,5);




//in java script

//$("#button").on('click',function(){
    //console.log("First event created");
    //test();
//});

//function test(){
    //alert("hello");
//}