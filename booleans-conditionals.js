// test cases:
  //var a=1,b=2,c=1;
// trueOrFalse(a>b) --> "false"
// trueOrFalse(a===b) --> "false"
// trueOrFalse(a<b) --> "true"
// trueOrFalse(a!==b) --> "true"
// trueOrFalse(b>c) --> "true"
// trueOrFalse(b===c) --> "false"
// trueOrFalse(b<c) --> "false"
// trueOrFalse(b!==c) --> "true"
// trueOrFalse(a===c) --> "true"
// trueOrFalse(a!==c) --> "false"
  // test for logical operators and bitwise operators
  // var t=true,f=false;
// trueOrFalse(t&&f) --> "false"
// trueOrFalse(f&&f) --> "false"
// trueOrFalse(t&&t) --> "true"
// trueOrFalse(t||f) --> "true"
// trueOrFalse(t||t) --> "true"
// trueOrFalse(f||f) --> "false"
// trueOrFalse(t&f) --> "false"
// trueOrFalse(t&t) --> "true"
// trueOrFalse(f&f) --> "false"
// trueOrFalse(t|f) --> "true"
// trueOrFalse(t|t) --> "true"
// trueOrFalse(f|f) --> "false"
// trueOrFalse(!t) --> "false"
// trueOrFalse(!f) --> "true"
// trueOrFalse(t^f) --> "true"
// trueOrFalse(t^t) --> "false"
// trueOrFalse(f^f) --> "false"
    //test for implicit conversion 
// trueOrFalse(true) --> "true"
// trueOrFalse(123) --> "true"
// trueOrFalse("123") --> "true"
// trueOrFalse(["123"]) --> "true"
// trueOrFalse("false") --> "true"
// trueOrFalse(false) --> "false"
// trueOrFalse(0) --> "false"
// trueOrFalse("") --> "false"
// trueOrFalse(null) --> "false"
// trueOrFalse([].length) --> "false"
// trueOrFalse(undefined) --> "false"

function trueOrFalse(val){
  if (val)    
    return "true";             
  else     
    return "false";
}
