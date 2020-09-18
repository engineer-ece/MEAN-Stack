interface init{
  (key: number, value: string) : void;
};


function add(key:number,value:string):void{
  console.log("add ==>"+key+"::"+value);
}

function update(key:number,value:string):void{
  console.log("update ==>"+key+"::"+value);
}

let a1:init = add;
a1(1,"m1");

a1 = update;
a1(2,"m2");



interface iu{
 ec:number;
 ed?:number;

}

let em1: iu = {
   ec:1
  
}
console.log(em1);
