stars
=====
Computes vertex stars of a simplicial complex.

Use
===
First install:

    npm install stars
    
Then use as follows:

```javascript
var stars = require("stars")

console.log(stars([
    [0, 1],
    [1, 2],
    [3, 4, 5],
    [1, 3],
    [5, 0]
  ])

//Prints:
//
//  [ [ 0, 4 ], [ 0, 1, 3 ], [ 1 ], [ 2, 3 ], [ 2 ], [ 2, 4 ] ]
//
```

### `require("stars")(cells[, numVertices])`
Computes the vertex stars of a simplicial complex.

* `cells` is an array of vertex indices
* `numVertices` is an optional integer representing the number of vertices

**Returns:** An array of size `numVertices` giving the set of all other vertices incident to each vertex.

Credits
=======
(c) 2013 Mikola Lysenko. MIT License