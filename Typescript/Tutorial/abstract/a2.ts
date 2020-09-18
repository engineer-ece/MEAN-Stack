import {Person} from './a1';

class Sup extends Person{
  name: string;
  code: number;
  constructor(name: string,code:number){
     super(name);
     this.name=name;
     this.code=code;
     console.log("constructor"+name+","+this.code);
  }
  
  test(obj:string): Person{
    return new Sup(obj,12);
  }

}



let emp: Person = new Sup("Gobal Krishnan V",100);
console.log(emp.test("Gobal Krishnan V"));

