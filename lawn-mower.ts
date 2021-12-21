import { Coordinates, Oriente } from "./Cordinates";
var fs = require('fs');



 function lownMowerExe(fileTxtPath: string) :string {

    let output: string = "";
    if(fileTxtPath){
        let input  : Array<string>=  fs.readFileSync(fileTxtPath).toString().split("\n");
        let maxValue = new Coordinates(input[0]);
        let minValue = new Coordinates("0 0");//TODO 
        input.shift(); //Remove the first Point that defined the maximum point;
    
        const cmmandArray = input.filter((_, i) => (i % 2 != 0)); //array of start point;
        input.filter((_, i) => (i % 2 == 0)) //array of command Consistently according to array of start point;
        .map((element, index) => {
    
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



const myArgs = process.argv.slice(2);
var filePath = myArgs[0].toString();

let output = lownMowerExe(filePath) ;
console.log(output);



