// test cases:
// cannonsReady({'Mike':'aye','Joe':'aye','Johnson':'aye','Peter':'aye'}) --> "Fire!"
// cannonsReady({'Mike':'aye','Joe':'nay','Johnson':'aye','Peter':'aye'}) --> "Shiver me timbers!"


const cannonsReady = (gunners) => {
    for (var name in gunners) {
        if (gunners[name] === "nay") {
          return "Shiver me timbers!"
        }
    }
  return "Fire!"
}
