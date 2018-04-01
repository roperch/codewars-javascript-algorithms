# test cases:
# animal({name:"dog",legs:4,color:"white"}) --> "This white dog has 4 legs."
# animal({name:"cock",legs:2,color:"red"}) --> "This red cock has 2 legs."
# animal({name:"rabbit",legs:4,color:"gray"}) --> "This gray rabbit has 4 legs."

function animal(obj){
  return "This " + obj.color + " " + obj.name+ " has " + obj.legs + " legs.";
}
