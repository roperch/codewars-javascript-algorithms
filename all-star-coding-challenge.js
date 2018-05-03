// test cases:
// strCount('Hello', 'o'), 1
// strCount('Hello', 'l'), 2
// strCount('', 'z'), 0

function strCount(str, letter){  
  return str.split(letter).length-1;
}
