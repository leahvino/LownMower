export class Coordinates {
    x: number;
    y: number;
    oriente: number


    // constructor(x = 0, y = 0, oriente? ) {

    //     this.x = x;
    //     this.y = y;
    //     this.oriente = oriente
    //   }

     constructor(coordinate :string) {
       let coordinateArr:Array<string> = coordinate.split(' ');
       this.x = +coordinateArr[0];
       this.y = +coordinateArr[1];
       
       if(coordinateArr[2])
       this.oriente = Oriente[coordinateArr[2].replace(/(\r\n|\n|\r)/gm, "")] ;    
      }
 }


 export enum Oriente{
    N = 1,
    W, 
    S,
    E
 }

