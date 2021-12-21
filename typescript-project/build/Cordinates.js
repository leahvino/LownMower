"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrienteMap = new Map([
    ["N", 1],
    ["W", 2],
    ["S", 3],
    ["E", 4],
]);
var Coordinates = /** @class */ (function () {
    // constructor(x = 0, y = 0, oriente? ) {
    //     this.x = x;
    //     this.y = y;
    //     this.oriente = oriente
    //   }
    function Coordinates(coordinate) {
        var coordinateArr = coordinate.split(' ');
        this.x = +coordinateArr[0];
        this.y = +coordinateArr[1];
        if (coordinateArr[2])
            this.oriente = Oriente[coordinateArr[2].replace(/(\r\n|\n|\r)/gm, "")];
    }
    return Coordinates;
}());
exports.Coordinates = Coordinates;
var Oriente;
(function (Oriente) {
    Oriente[Oriente["N"] = 1] = "N";
    Oriente[Oriente["W"] = 2] = "W";
    Oriente[Oriente["S"] = 3] = "S";
    Oriente[Oriente["E"] = 4] = "E";
})(Oriente = exports.Oriente || (exports.Oriente = {}));
