// test cases:
// findAverage([1]) --> 1
// findAverage([1, 3, 5, 7]) --> 4

var findAverage = function (nums) {
  var sum = 0;
  for (var i=0; i<nums.length;i++)
    sum += nums[i];
  return sum/nums.length;
}
