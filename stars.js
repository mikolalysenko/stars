"use strict"

var sc = require("simplicial-complex")
var uniq = require("uniq")

function stars(cells, num_verts) {
  var d = sc.dual(cells, num_verts || sc.countVertices(cells))
  for(var i=0,nv=d.length; i<nv; ++i) {
    var c = []
    var n = d[i]
    for(var j=0; j<n.length; ++j) {
      var f = cells[n[j]]
      for(var k=0, m=f.length; k<m; ++k) {
        if(f[k] !== i) {
          c.push(f[k])
        }
      }
    }
    d[i] = uniq(c, function(a,b) {
      return a-b
    })
  }
  return d
}

module.exports = stars