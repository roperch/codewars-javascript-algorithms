// test cases:
// goose_filter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]) --> 
// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// goose_filter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]) --> 
// ["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"])
// goose_filter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]) --> 
// []

function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  for (var i=0;i<birds.length;i++)
    if ( geese.indexOf(birds[i]) != -1 )
      delete birds[i];
  return birds;
};
