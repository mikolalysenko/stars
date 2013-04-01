"use strict"

var sc = require("simplicial-complex")
var uniq = require("uniq")

function stars(cells, num_verts) {
  var d = sc.dual(cells, num_verts || sc.countVertices(cells))
  for(var i=0; i<d.length; ++i) {
    var c = []
    var n = d[i]
    for(var j=0; j<n.length; ++j) {
      c = c.concat(cells[n[j]])
    }
    d[i] = uniq(n)
  }
  return d
}

module.exports = stars