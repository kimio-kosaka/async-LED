
//var raspi = require('raspi-io');
var five = require('johnny-five');
var async = require('async');

var board = new five.Board({
//  io: new raspi()
});

board.on('ready', function() {
  var led_0 = new five.Led('13');
  var led_1 = new five.Led('12');
  var led_2 = new five.Led('11');

    async.series([
        function(next) {
            setTimeout(function() {
                led_0.on();
                console.log('R done!');
                next(null, 'one');
            }, 2000);
        },
        function(next) {
            setTimeout(function() {
                led_0.off();
                led_1.on();
                console.log('G done!');
                next();
            }, 2000);
        },
        function(next) {
            setTimeout(function() {
                led_1.off();
                led_2.on();
                console.log('B done!');
                next();
            }, 2000);
        },    
        function(next) {
            setTimeout(function() {
                led_2.off();
                console.log('B done!');
                next(null, 'three', 3, '3');
            }, 1500);
        }     
    ], function complete(err, results) {
        console.log(JSON.stringify(results));
    });
});
