"use strict";
exports.__esModule = true;
var Cordinates_1 = require("./Cordinates");
var fs = require('fs');
function hello() {
    // print process.argv
    //process.argv.forEach(function (val, index, array) {
    //var input = fs.createReadStream(val);
    //readLines(input, func);
    var output;
    var input = fs.readFileSync(process.argv[2]).toString().split("\n");
    var maxValue = new Cordinates_1.Coordinates(input[0]);
    var minValue = new Cordinates_1.Coordinates("0 0"); //TODO 
    input.shift();
    var cmmandArray = input.filter(function (_, i) { return (i % 2 != 0); });
    input.filter(function (_, i) { return (i % 2 == 0); })
        .map(function (element, index, array) {
        var currentValue = new Cordinates_1.Coordinates(element);
        cmmandArray[index].split("").map(function (c) {
            switch (c) {
                case 'L':
                    currentValue.oriente = -1;
                    break;
                case 'R':
                    currentValue.oriente = +1;
                case 'F':
                    switch (currentValue.oriente) {
                        case Cordinates_1.Oriente.N:
                            if (currentValue.y < maxValue.y)
                                currentValue.y = +1;
                            break;
                        case Cordinates_1.Oriente.W:
                            if (currentValue.x > minValue.x)
                                currentValue.x = -1;
                            break;
                        case Cordinates_1.Oriente.S:
                            if (currentValue.y > minValue.y)
                                currentValue.y = -1;
                            break;
                        case Cordinates_1.Oriente.E:
                            if (currentValue.x - 1 > maxValue.x)
                                currentValue.x = +1;
                            break;
                    }
            }
        });
        // console.log(currentValue.x ,currentValue.y, currentValue.oriente);
    });
    // console.log(input);
    //});
    //console.log(`Hello ${world}! `) ;
}
function setOriente() {
}
hello();
