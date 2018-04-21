// test cases:
// cookie("Ryan") --> "Who ate the last cookie? It was Zach!"
// cookie(26) --> "Who ate the last cookie? It was Monica!"
// cookie(2.3) --> "Who ate the last cookie? It was Monica!"
// cookie(true) --> "Who ate the last cookie? It was the dog!"


function cookie(x){
  if (typeof x === "string"){
    return "Who ate the last cookie? It was Zach!";
  }
  else if (typeof x === "number"){
    return "Who ate the last cookie? It was Monica!";
  }
  else{
    return "Who ate the last cookie? It was the dog!";
  }
}
