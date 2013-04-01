var stars = require("../stars.js")

require("tap").test("stars", function(t) {

  console.log(stars([
      [0, 1],
      [1, 2],
      [3, 4, 5],
      [1, 3],
      [5, 0]
    ]))

  t.end()
})