// test cases:
// alias_gen('Mike', 'Millington') --> 'Malware Mike'
// alias_gen('Fahima', 'Tash') --> 'Function T-Rex'
// alias_gen('Daisy', 'Petrovic') --> 'Data Payload'
// alias_gen('Barny', 'White') --> 'Beta Worm'
// alias_gen('Hank', 'Kutz') --> 'Half-life Killer'
// alias_gen('123abc', 'Pinkman') --> 'Your name must start with a letter from A - Z.'
// alias_gen('walter', 'white') --> 'WiFi Worm'


function aliasGen(firstName, surname){
  firstName = firstName.toUpperCase();
  surname = surname.toUpperCase();
  var first = {
  A:'Alpha',
  B:'Beta',
  C:'Cache',
  D:'Data',
  E:'Energy',
  F:'Function',
  G:'Glitch',
  H:'Half-life',
  I:'Ice',
  J:'Java',
  K:'Keystroke',
  L:'Logic',
  M:'Malware',
  N:'Nagware',
  O:'OS',
  P:'Phishing',
  Q:'Quantum',
  R:'RAD',
  S:'Strike',
  T:'Trojan',
  U:'Ultraviolet',
  V:'Vanilla',
  W:'WiFi',
  X:'Xerox',
  Y:'Y',
  Z:'Zero',
  }
  var last = {
  A:'Analogue',
  B:'Bomb',
  C:'Catalyst',
  D:'Discharge',
  E:'Electron',
  F:'Faraday',
  G:'Gig',
  H:'Hacker',
  I:'IP',
  J:'Jabber',
  K:'Killer',
  L:'Lazer',
  M:'Mike',
  N:'n00b',
  O:'Overclock',
  P:'Payload',
  Q:'Quark',
  R:'Roy',
  S:'Spy',
  T:'T-Rex',
  U:'Unit',
  V:'Virus',
  W:'Worm',
  X:'X',
  Y:'Yob',
  Z:'Zombie',
  }
  if (first[firstName[0]] === undefined || last[surname[0]] === undefined){
    return 'Your name must start with a letter from A - Z.';
  }
  return first[firstName[0]]+" "+last[surname[0]];
}
