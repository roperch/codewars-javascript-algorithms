// test cases:
// roundIt(3.45) --> 4
// roundIt(34.5) --> 34
// roundIt(34.56) --> 35

function roundIt(n){
  var placeHolder = String(n).split(".");
  if (placeHolder[0].length<placeHolder[1].length)
    return Math.ceil(n);
  else if (placeHolder[0].length>placeHolder[1].length)
    return Math.floor(n);
  else if (placeHolder[0].length===placeHolder[1].length)
    return Math.round(n);
}
