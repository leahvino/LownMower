"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cordinates_1 = require("./Cordinates");
var fs = require('fs');
function lownMowerExe(fileTxtPath) {
    var output = "";
    if (fileTxtPath) {
        var input = fs.readFileSync(fileTxtPath).toString().split("\n");
        var maxValue_1 = new Cordinates_1.Coordinates(input[0]);
        var minValue_1 = new Cordinates_1.Coordinates("0 0"); //TODO 
        input.shift();
        var cmmandArray_1 = input.filter(function (_, i) { return (i % 2 != 0); });
        input.filter(function (_, i) { return (i % 2 == 0); })
            .map(function (element, index, array) {
            var currentValue = new Cordinates_1.Coordinates(element);
            cmmandArray_1[index].split("").map(function (c) {
                switch (c) {
                    case 'L':
                        currentValue.oriente = currentValue.oriente == Cordinates_1.Oriente.E ? Cordinates_1.Oriente.N : (currentValue.oriente + 1);
                        break;
                    case 'R':
                        currentValue.oriente = currentValue.oriente == Cordinates_1.Oriente.N ? Cordinates_1.Oriente.E : (currentValue.oriente - 1);
                        break;
                    case 'F':
                        switch (currentValue.oriente) {
                            case Cordinates_1.Oriente.N:
                                if (currentValue.y < maxValue_1.y)
                                    currentValue.y += 1;
                                break;
                            case Cordinates_1.Oriente.W:
                                if (currentValue.x > minValue_1.x)
                                    currentValue.x -= 1;
                                break;
                            case Cordinates_1.Oriente.S:
                                if (currentValue.y > minValue_1.y)
                                    currentValue.y -= 1;
                                break;
                            case Cordinates_1.Oriente.E:
                                if (currentValue.x < maxValue_1.x)
                                    currentValue.x += 1;
                                break;
                        }
                }
            });
            output += currentValue.x + " " + currentValue.y + " " + Cordinates_1.Oriente[(currentValue.oriente)] + "\n";
        });
    }
    else {
        output = "file path was not found";
    }
    return output;
}
// process.argv.forEach(function (val, index, array) {
//     console.log(val);
// });
var filePath = process.argv[2].toString();
lownMowerExe(filePath);
//console.log(output);
