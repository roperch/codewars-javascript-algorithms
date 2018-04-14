// test cases:
// deriive(7,8) --> "56x^7")
// derive(5,9), --> "45x^8"

function derive(coefficient,exponent) {
  coefficient*=exponent;
  exponent-=1;
  return coefficient.toString() + "x^" + exponent.toString();
}
