function getNeighbors(row, col, matrix) {

  let neighbors = [];

  // Check top
  if (matrix[row-1] && matrix[row-1][col]===1) {
    neighbors.push([row-1, col]);
  }
  // Check top right
  if (matrix[row-1] && matrix[row-1][col+1] && matrix[row-1][col+1] === 1) {
    neighbors.push([row-1, col+1])
  }
  // Check right
  if (matrix[row][col+1] && matrix[row][col+1] === 1) {
    neighbors.push([row, col+1]);
  }
  // Check bottom right
  if (matrix[row+1] && matrix[row+1][col+1] && matrix[row+1][col+1] === 1) {
    neighbors.push([row+1, col+1]);
  }
  // Check bottom
  if (matrix[row+1] && matrix[row+1][col] === 1) {
    neighbors.push([row+1, col]);
  }
  // Check bottom left
  if (matrix[row+1] && matrix[row+1][col-1] && matrix[row+1][col-1] === 1) {
    neighbors.push([row+1, col-1]);
  }
  // Check left
  if (matrix[row][col-1] && matrix[row][col-1] === 1) {
    neighbors.push([row, col-1]);
  }
  // Check top left
  if (matrix[row-1] && matrix[row-1][col-1] && matrix[row-1][col-1] === 1) {
    neighbors.push([row-1, col-1]);
  }
  // Return neighbors

  return neighbors;
}

function countIslands(matrix) {

  // Create a visited set to store visited nodes
  let visited = new Set();
  // Initialize count to 0
  let islandCount = 0;
  // Iterate through all indices in matrix
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {

      let index = [row, col];
      let stringified = index.toString();
      let value = matrix[row][col];

    // If an index contains a 1 and has not been visited,
      if (!visited.has(stringified) && value === 1) {
        // increment island count and start traversing neighbors
        // DO THE THING (increment island count by 1)
        islandCount++;
        // Initialize a stack with current index
        let stack = [index];
        // Add stringified version of current index to the visited set
        visited.add(stringified);
        // While stack contains elements
        while (stack.length > 0) {
          // Pop element from stack
          let currentIndex = stack.pop();
          let currentRow = currentIndex[0];
          let currentCol = currentIndex[1];
          // Get valid neighbors of current element
          let neighbors = getNeighbors(currentRow, currentCol, matrix);
          // Iterate over neigbors
          neighbors.forEach(
            neighbor => {
            // If neighbor has not been visited
            let stringed = neighbor.toString();
            if (!visited.has(stringed)) {
              // Add neighbor to stack
              stack.push(neighbor);
              // Mark neighbor as visited
              visited.add(stringed);
            }
            }
          );
        }
      }
    }
  }
  // Return island count
  return islandCount;

  // Your code here
}

// Uncomment the lines below for local testing
// const matrix = [
//                 [1,1,1,0,0],
//                 [0,1,1,0,1],
//                 [0,1,1,0,1]
//               ]

// console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
// console.log(getNeighbors(2,4, matrix)) // [[1,4]]

// const matrix2 = [
//                     [1,1,1,0,1],
//                     [0,0,0,0,1],
//                     [1,0,0,1,0],
//                 ]

// console.log(countIslands(matrix)) // 2
// console.log(countIslands(matrix2)); // 3

module.exports = [countIslands, getNeighbors];
