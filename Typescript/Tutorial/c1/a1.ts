export var greeting: string = "Hello world!";
export class User{
    id: number;
    name: string;
   
    constructor(id:number, name:string){
       this.id=id;
       this.name=name;
    }
    
    display():void {
       console.log(this.id+","+this.name);
    }  
     
}
