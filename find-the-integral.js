// test cases:
integrate(3,2) --> "1x^3"
integrate(9,5) --> "1.5x^6"

function integrate(coefficient, exponent) {
  coefficient = coefficient / (exponent+1);
  exponent+=1;
  return coefficient+"x^"+exponent;
}
