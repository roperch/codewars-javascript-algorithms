// test cases
// feast("great blue heron", "garlic naan") --> true
// feast("chickadee", "chocolate cake") --> true
// feast("brown bear", "bear claw") --> false

function feast(beast, dish) {
  return beast[0] === dish[0] && beast[beast.length-1] == dish[dish.length-1];
  
}
