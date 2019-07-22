//var socket = io.connect('ip address of device:8080');
var socket = io.connect('http://localhost:8080');

$('document').ready(function(){
    console.log("client is connected to server");
    
    //GO
    $('[id^=forward]').on("mousedown", function(){
        socket.emit('moveForward', { my: 'data' });
        console.log("moving forward...");
    });
    $('[id^=forward]').on("touchstart", function(){
        socket.emit('moveForward', { my: 'data' });
        console.log("moving forward...");
    });

    $('[id^=backward]').on("mousedown", function(){
        socket.emit('moveBackward', { my: 'data' });
        console.log("moving backward...");
    });
    $('[id^=backward]').on("touchstart", function(){
        socket.emit('moveBackward', { my: 'data' });
        console.log("moving backward...");
    });

    $('[id^=left]').on("mousedown", function(){
        socket.emit('turnLeft', { my: 'data' });
        console.log("turning left...");
    });
    $('[id^=left]').on("touchstart", function(){
        socket.emit('turnLeft', { my: 'data' });
        console.log("turning left...");
    });

    $('[id^=right]').on("mousedown", function(){
        socket.emit('turnRight', { my: 'data' });
        console.log("turning right...");
    });
    $('[id^=right]').on("touchstart", function(){
        socket.emit('turnRight', { my: 'data' });
        console.log("turning right...");
    });
    

    //STOP
    $('[id^=forward]').on("mouseup", function(){
        socket.emit('stop', { my: 'data' });
        console.log("stopping....");
    });
    $('[id^=forward]').on("touchend", function(){
        socket.emit('stop', { my: 'data' });
        console.log("stopping....");
    });

    $('[id^=backward]').on("mouseup", function(){
        socket.emit('stop', { my: 'data' });
        console.log("stopping....");
    });
    $('[id^=backward]').on("touchend", function(){
        socket.emit('stop', { my: 'data' });
        console.log("stopping....");
    });

    $('[id^=left]').on("mouseup", function(){
        socket.emit('stop', { my: 'data' });
        console.log("stopping....");
    });
    $('[id^=left]').on("touchend", function(){
        socket.emit('stop', { my: 'data' });
        console.log("stopping....");
    });

    $('[id^=right]').on("mouseup", function(){
        socket.emit('stop', { my: 'data' });
        console.log("stopping....");
    });
    $('[id^=right]').on("touchend", function(){
        socket.emit('stop', { my: 'data' });
        console.log("stopping....");
    });

});

