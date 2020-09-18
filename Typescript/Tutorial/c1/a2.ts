import {User} from "./a1";


class Mag extends User{
  empId:number;
  empName:string;

  constructor(empId: number, empName: string){
    super(empId,empName);
    this.empId = empId;
    this.empName = empName;
  }
 
  display1(){
    console.log(this.empId+" :"+this.empName);
 
  }
}

let a= new Mag(1,"Gobal Krishnan V");
a.display();

