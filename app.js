var express = require('express');
var path = require('path');
const socketIO = require('socket.io');
//const gpio = require('rpi-gpio');

const app = express();
const port = 8080;

//Assign pins to variables
var m1A = 16;
var m1B = 18;
var m1E = 22;

var m2A = 19;
var m2B = 21;
var m2E = 23;

//Setup the GPIO pins for the methods below
// gpio.setup(m1A, gpio.DIR_OUT);
// gpio.setup(m1B, gpio.DIR_OUT);
// gpio.setup(m1E, gpio.DIR_OUT);

// gpio.setup(m2A, gpio.DIR_OUT);
// gpio.setup(m2B, gpio.DIR_OUT);
// gpio.setup(m2E, gpio.DIR_OUT);

//Create the server
const server = app.listen(port,() => {
    console.log(`Example app listening on port ${port}!`)
});

//Get socket to listen on the server
const io = socketIO(server);

app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    console.log("connection made");

    socket.on('moveForward', function () {
        _moveForward();
    });

    socket.on('moveBackward', function () {
        _moveBackward();
    });

    socket.on('turnLeft', function (data) {
        _turnLeft();
    });

    socket.on('turnRight', function (data) {
        _turnRight();
    });

    socket.on('stop', function (data) {
        _stop();
    });

});

function _moveForward(){
    try{
        //motor 1
        gpio.write(m1A, false,()=>{});
        gpio.write(m1B, true,()=>{});
        gpio.write(m1E, true,()=>{});
    
        //motor 2
        gpio.write(m2A, true,()=>{});
        gpio.write(m2B, false,()=>{});
        gpio.write(m2E, true,()=>{});
    }catch(error){
        console.log(error);
    }
    console.log('Rasbot moving forward....');
    
}

function _moveBackward(){
    try{
        //motor 1
        gpio.write(m1A, true,()=>{});
        gpio.write(m1B, false,()=>{});
        gpio.write(m1E, true,()=>{});
    
        //motor 2
        gpio.write(m2A, false,()=>{});
        gpio.write(m2B, true,()=>{});
        gpio.write(m2E, true,()=>{});
    }catch(error){
        console.log(error);
    }
    console.log('Rasbot moving backward....');
    
}

function _turnLeft(){
    try{
        //motor 1
        gpio.write(m1A,GPIO.false,()=>{});
        gpio.write(m1B,GPIO.true,()=>{});
        gpio.write(m1E,GPIO.true,()=>{});
        //motor 2
        gpio.write(m2A,GPIO.false,()=>{});
        gpio.write(m2B,GPIO.true,()=>{});
        gpio.write(m2E,GPIO.true,()=>{});
    }catch(error){
        console.log(error);
    }
    console.log('Rasbot turning left....');
}

function _turnRight(){
    try{
        //motor 1
        gpio.write(m1A,GPIO.true,()=>{});
        gpio.write(m1B,GPIO.false,()=>{});
        gpio.write(m1E,GPIO.true,()=>{});
        //motor 2
        gpio.write(m2A,GPIO.true,()=>{});
        gpio.write(m2B,GPIO.false,()=>{});
        gpio.write(m2E,GPIO.true,()=>{});
    }catch(error){
        console.log(error);
    }
    console.log('Rasbot turning right....');
}

function _stop(){
    console.log('Rasbot stopped....');
    gpio.write(m1E, false,()=>{});
    gpio.write(m2E, false,()=>{});
}

