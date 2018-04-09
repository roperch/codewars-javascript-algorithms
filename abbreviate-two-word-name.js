// abbrevName("Sam Harris") --> "S.H"
// abbrevName("Patrick Feenan") --> "P.F"
// abbrevName("Evan Cole") --> "E.C"
// abbrevName("P Favuzzi") --> "P.F"
abbrevName("David Mendieta") --> "D.M"


function abbrevName(name){
    //capitalize the name - completed
    name = name.toUpperCase();
    //split the name into an array - completed
    name = name.split(' ');
    //return the initials
    return name[0][0]+"."+name[1][0];

}
