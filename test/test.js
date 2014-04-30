var stars = require("../stars.js")

require("tape")("stars", function(t) {

  t.same(stars([
      [0, 1],
      [1, 2],
      [3, 4, 5],
      [1, 3],
      [5, 0]
    ]), 
    [ [ 1, 5 ], [ 0, 2, 3 ], [ 1 ], [ 1, 4, 5 ], [ 3, 5 ], [ 0, 3, 4 ] ]
  )

  t.same(stars([[0,1]], 3), [
    [1],
    [0],
    []
    ])

  t.end()
})