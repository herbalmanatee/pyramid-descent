
//function takes array of integers
//returns matrix of integers with pyramid dimensions
let makeMatrix = (arr) => {
  let row = 1; //represents the length of the pyramid row
  let matrix = [];

  while (arr.length > 0) {
    matrix.push(arr.splice(0,row));
    row++;
  }

  return matrix;
}


let solver = (target, arr) => {
  let matrix = makeMatrix(arr);

  let solution = '';

  let descendPyramid = (row, product, index, path, move) => {

    if (row > 0) {
      path.push(move);
    }
    product *= matrix[row][index];

    if (product > target) { // this is uneccesary but will improve time complexity in some situations, particularly large pyramids
      return false;
    }


    if (row === matrix.length - 1) {
      if (product === target) {
        solution = path.join('');

        return true;
      } else {
        return false;
      }
    }

    for (let i=0; i<2; i++) {
      let direction = '';
      if (i === 0) { //logic for checking left and right child
        direction = 'L'
      } else { //checking right child
        index +=1;
        direction = 'R'
      }

     if (descendPyramid(row+1, product, index, path, direction)) {
       return;
     } else {
       path.pop();
     }

    }

  }

  descendPyramid(0, 1, 0, []);
  return solution;
}

let test = () => {
  console.log(makeMatrix([1,2,3,4,1,1]));
  console.log(makeMatrix([2,4,3,3,2,6,2,9,5,2,10,5,2,15,5]))
  console.log(solver(2, [1,2,3,4,1,1]));
  console.log(solver(720, [2,4,3,3,2,6,2,9,5,2,10,5,2,15,5]));
  console.log(solver(1, [1,2,1,3,2,1,4,3,2,1,5,4,3,2,1,6,5,4,3,2,1,7,6,5,4,3,2,1,8,7,6,5,4,3,1,2]));
  console.log(solver(1, [1,2,1,3,2,1,4,3,2,1,5,4,3,2,1,6,5,4,3,2,1,7,6,5,4,3,2,1,8,7,6,5,4,3,2,1]));
}

test();