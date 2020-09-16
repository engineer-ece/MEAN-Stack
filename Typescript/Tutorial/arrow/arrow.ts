let sum = (x: number,y: number): void => {
  console.log(x+y);
}

sum(10,20);


class User{
   name: string;
   constructor(){}

   display= () => console.log(this.name);
}


let usr = new User();
usr.name = "Gobal Krishnan V";
usr.display();
