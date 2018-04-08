// test cases:
// howManydays(1) --> 31 
// howManydays(2) --> 28
// howManydays(3) --> 31 
// howManydays(4) --> 30
// howManydays(12) --> 31


function howManydays(month){
  var days;
  switch (month){
    case 1:
      days = 31;
      break;
    case 2:
      days = 28;
      break; 
    case 3:
      days = 31;
      break;
    case 4:
      days = 30;
      break; 
    case 5:
      days = 31;
      break;
    case 6:
      days = 30;
      break;
    case 7:
      days = 31;
      break; 
    case 8:
      days = 31;
      break; 
    case 9:
      days = 30;
      break; 
    case 10:
      days = 31;
      break;
    case 11:
      days = 30;
      break; 
    case 12:
      days = 31;
      break; 
  }
  return days;
}
