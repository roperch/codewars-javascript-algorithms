// test cases:
// find_smallest_int([78, 56, 232, 12, 11, 43]) --> 11
// find_smallest_int([78, 56, -2, 12, 8, -33]) --> -33
// find_smallest_int([0, 1-2**64, 2**64]) --> 1-2**64

class SmallestIntegerFinder {
  findSmallestInt(args) {
    var min_value = args[0];
    for (var i=0; i<args.length; i++){
      if (min_value > args[i]){
        min_value = args[i];
      }
    }
    return min_value;  
  }
}
