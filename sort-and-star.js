// test cases:
twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]) --> 'b***i***t***c***o***i***n' 
twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]) --> 'a***r***e'

function twoSort(s) {
  s = s.sort();
  return s[0].split('').join("***");
}
