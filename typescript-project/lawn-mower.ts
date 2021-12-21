import { Coordinates, Oriente } from "./Cordinates";
var fs = require('fs');



 function lownMowerExe(fileTxtPath: string) :string {

    let output: string = "";
    if(fileTxtPath){
        let input  : Array<string>=  fs.readFileSync(fileTxtPath).toString().split("\n");
        let maxValue = new Coordinates(input[0]);
        let minValue = new Coordinates("0 0");//TODO 
        input.shift();
    
        const cmmandArray = input.filter((_, i) => (i % 2 != 0));
        input.filter((_, i) => (i % 2 == 0))
        .map((element, index, array) => {
    
            let currentValue = new Coordinates(element);
            cmmandArray[index].split("").map(c => {
    
                switch(c){
                    case 'L':
                     currentValue.oriente = currentValue.oriente == Oriente.E ? Oriente.N : (currentValue.oriente + 1);
                        break;
                    case 'R':
                     currentValue.oriente = currentValue.oriente == Oriente.N ? Oriente.E :(currentValue.oriente - 1) 
                        break;
                    case 'F':
                        switch (currentValue.oriente){
                            case Oriente.N :
                                if(currentValue.y < maxValue.y) 
                                currentValue.y += 1;
                                break;
                            case Oriente.W:
                                if(currentValue.x > minValue.x) 
                                currentValue.x -= 1;
                                break;
                            case Oriente.S:
                                if(currentValue.y > minValue.y) 
                                currentValue.y -= 1;
                                break;
                            case Oriente.E: 
                                if(currentValue.x < maxValue.x) 
                                currentValue.x += 1;
                                break;
                        }
                }  
      
        });
        output +=  `${currentValue.x} ${currentValue.y} ${Oriente[(currentValue.oriente)]}\n`
       });
    }
    else{
        output = "file path was not found";
    }
   
   return output;  
}



// process.argv.forEach(function (val, index, array) {
//     console.log(val);
// });


var filePath = process.argv[2].toString();

let output = lownMowerExe(filePath) ;
console.log(output);



