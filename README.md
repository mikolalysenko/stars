stars
=====
Computes vertex stars of a simplicial complex.

# Example

```javascript
var stars = require("stars")

console.log(stars([
    [0, 1],
    [1, 2],
    [3, 4, 5],
    [1, 3],
    [5, 0]
  ])
```

Output:

```javascript
[ [ 1, 5 ], [ 0, 2, 3 ], [ 1 ], [ 1, 4, 5 ], [ 3, 5 ], [ 0, 3, 4 ] ]
```

# Install

```
npm install stars
```

# API

#### `require("stars")(cells[, numVertices])`
Computes the vertex stars of a simplicial complex.

* `cells` is an array of vertex indices
* `numVertices` is an optional integer representing the number of vertices

**Returns:** An array of size `numVertices` giving the set of all other vertices incident to each vertex.

Credits
=======
(c) 2013 Mikola Lysenko. MIT License