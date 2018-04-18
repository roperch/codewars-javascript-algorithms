// test cases
// first(arr) => ['a']
// first(arr, 2) => ['a', 'b']
// first(arr, 3) => ['a', 'b', 'c']
// first(arr, 0) => []

function first(arr, n) {
  
  if (n){
    return arr.slice(0,n);
  }
  else if (n===0){
    return [];
  }
  return arr.slice(0,1);
}
