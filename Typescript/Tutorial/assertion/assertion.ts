let code: any = 123;
let employeeCode = <number> code;
console.log(typeof(employeeCode));
let code1 = code as number;
console.log(typeof(code1));


interface Organ{
 parts: string;
 get: () => string; 
}

let org = <Organ>{};
org.parts="brain";
console.log(org);












