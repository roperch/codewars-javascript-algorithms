// test cases:
// sumSquares([1,2,3,4,5]) --> 55
// sumSquares([7,3,9,6,5]) --> 200
// sumSquares([11,13,15,18,2]) --> 843
// sumSquares([-5,-4,-3,-2,-1,0,1,2,3,4,5]) --> 110

function sumSquares(array) {
  array = array.map(x => x ** 2);
  
  function add(a,b){
    return a+b;
  }
  
  var sum = array.reduce(add,0);
  return sum
}
