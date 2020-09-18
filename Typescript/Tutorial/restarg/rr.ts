function greet(word: string, ...names: string[]){
  console.log( word+ " " + names.join(", ") + "!?"); 
}


greet("Hello","Gobal","Krishnan","V");
greet("Hello");
