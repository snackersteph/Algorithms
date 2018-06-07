// *****************************************************
// ******************* SPIRAL MATRIX *******************
// *****************************************************

// How do you print a matrix in spiral order?
// The sample matrix:
// 1 2 3 4 5 6 
// 7 8 9 10 11 12
// 13 14 15 16 17 18

// Should print out:
// 1 2 3 4 5 6 12 18 17 16 15 14 13 7 8 9 10 11

var spiralMatrix = (matrix) => {
  var rows = matrix.length;
  var columns = matrix[0].length;
  var top = 0;
  var left = 0;
  var right = columns - 1;
  var bottom = rows - 1;

  while (left <= right && top <= bottom) {
    for (j = left; j <= right; j ++) {
      console.log(matrix[top][j]);
    }
    top ++;
    for (i = top; i <= bottom; i ++) {
      console.log(matrix[i][right]);
    }
    right --;
    if (top <= bottom) {
      for (j = right; j >= left; j --) {
        console.log(matrix[bottom][j]);
      }
    }
    bottom --;
    if (left <= right) {
      for (i = bottom; i >= top; i --) {
        console.log(matrix[i][left]);
      }
    }
    left ++;
  }
}

// >>>>>>>>>>>>>>>>>> TEST CASE >>>>>>>>>>>>>>>>>> //

// var matrix1 = [
//   [1,2,3,4,5,6],
//   [7,8,9,10,11,12],
//   [13,14,15,16,17,18]
// ]

// console.log(spiralMatrix(matrix1))