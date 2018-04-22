// test cases:
// calculate_tip(30, "poor") --> 2
// calculate_tip(20, "Excellent") --> 4
// calculate_tip(20, "hi") --> 'Rating not recognised'
// calculate_tip(107.65, "GReat") --> 17
// calculate_tip(20, "great!") --> 'Rating not recognised'

function calculateTip(amount, rating) {
  rating = rating.toLowerCase();
  if (rating==="terrible"){
    return Math.ceil(amount * 0);
  }
  else if (rating==="poor"){
    return Math.ceil(amount * 0.05);
  }
  else if (rating==="good"){
    return Math.ceil(amount * 0.1);
  }
  else if (rating==="great"){
    return Math.ceil(amount * 0.15);
  }
  else if (rating==="excellent"){
    return Math.ceil(amount * 0.2);
  }
  else {
    return 'Rating not recognised';
  }
}
