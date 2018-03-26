# test cases
# SafeInteger(9007199254740992) --> false
# SafeInteger(9007199254740990) --> true

function SafeInteger(n) {
  return Number.isInteger(n) && n<9007199254740992;
}
