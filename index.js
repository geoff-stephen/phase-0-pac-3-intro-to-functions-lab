function shout(string){
    return string.toUpperCase();
}
function whisper(string){
    return string.toLowerCase();
}
 function logShout(string){
   console.log(string.toUpperCase());
}
function logWhisper(string){
    console.log(string.toLowerCase());
}
function sayHiToGrandma(s){
    switch(s){
      case(s.toLowerCase()):
        return "I can\'t hear you!";
  
      case(s.toUpperCase()):
        return "YES INDEED!";
  
      case("I love you, Grandma."):
        return "I love you, too.";
    }
  }